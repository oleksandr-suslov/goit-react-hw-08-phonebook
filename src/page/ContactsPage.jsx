import { useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import {getContacts} from '../redux/phonebook/phonebookSelectors'
import styles from "./Page.module.css";

export default function ContactsPage() {
 const contacts = useSelector(getContacts);
  return (
    <div className={styles.wraper}>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm  />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length < 2 ? null : <Filter />}
      <ContactList  />
    </div>
  );
}