import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

export default function PhoneBook() {
  return (
    <div>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm nameBtn="Add contact" />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList nameBtn="Delete" />
    </div>
  );
}
