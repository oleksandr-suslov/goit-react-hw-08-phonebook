import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@material-ui/core";

import {
  removeContact,
  fetchContacts,
  // updateContact,
} from "../../redux/phonebook/phonebookOperations";
import { getContactsByFilter } from "../../redux/phonebook/phonebookSelectors";
import { ContactModal } from "../ContactModal/ContactModal";
import { ReactComponent as DeleteIcon } from "../../icons/bin.svg";
import { ReactComponent as UpdateIcon } from "../../icons/pencil.svg";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const deleteContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  const onFilter = useSelector(getContactsByFilter);

  return (
    <ul className={styles.list}>
      {onFilter.map((item) => (
        <li className={styles.item} key={item.id}>
          <span className={styles.itemName}>{item.name}:</span>
          <span className={styles.itemPhone}> {item.number}</span>
          <div>
            <IconButton
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                setOpenModal(true);
                setId(evt.currentTarget.id);
                // console.log('evt.currentTarget.id', evt.currentTarget.id)
                // updateContact({id: evt.currentTarget.id, name: "Jacob Mercer",
                // number: "761-23-96" });
              }}
              id={item.id}
            >
              <UpdateIcon width="20" height="20" fill="rgb(71, 71, 71)" />
            </IconButton>

            <IconButton
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                deleteContact(evt.currentTarget.id);
              }}
              id={item.id}
            >
              <DeleteIcon width="20" height="20" fill="rgb(71, 71, 71)" />
            </IconButton>
          </div>
          <ContactModal openModal={openModal} id={id} />
        </li>
      ))}
    </ul>
  );
}
