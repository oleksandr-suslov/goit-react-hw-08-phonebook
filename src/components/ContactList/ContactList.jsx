import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/operations";
import {fetchContacts} from '../../redux/operations'
import {getContacts} from '../../redux/contacts-selectors'
import { ReactComponent as DeleteIcon } from "../../icons/bin.svg";
import Button from "../Button/Button";
import styles from "./ContactList.module.css";

export default function ContactList({ nameBtn }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => { dispatch(fetchContacts()) }, []);
  const filter = useSelector((state) => state.filter);
  const deleteContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  const onFilter = filter
    ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
    : contacts;
  return (
    <ul className={styles.list}>
      
      {onFilter.map((item) => (
        <li className={styles.item} key={item.id}>
          <span className={styles.itemName}>{item.name}:</span>
          <span className={styles.itemPhone}> {item.number}</span>
          
          <Button
            name={nameBtn}
            clickOnBtn={(evt) => {
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
