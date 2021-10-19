import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";
import {
  removeContact,
  fetchContacts,
} from "../../redux/phonebook/phonebookOperations";
import { getContactsByFilter } from "../../redux/phonebook/phonebookSelectors";
import { ReactComponent as DeleteIcon } from "../../icons/bin.svg";
import styles from "./ContactList.module.css";

export default function ContactList({ nameBtn }) {
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

          <Button
            type="button"
            onClick={(evt) => {
              evt.preventDefault();
              deleteContact(evt.currentTarget.id);
            }}
            id={item.id}
          >
            <DeleteIcon width="20" height="20" fill="rgb(71, 71, 71)" />
          </Button>
        </li>
      ))}
    </ul>
  );
}
