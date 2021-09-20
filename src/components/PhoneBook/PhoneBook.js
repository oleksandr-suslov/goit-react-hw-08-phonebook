import { useState } from "react";
import { useSelector } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

export default function PhoneBook() {
  // const [contacts, setContacts] = useLocalStorage("contacts", [
  //   { name: "David", number: "3235-43-21", id: "12" },
  //   { name: "Rony", number: "3235-43-51", id: "13" },
  //   { name: "Bob", number: "3235-43-81", id: "14" },
  //   { name: "Ivan", number: "3235-43-91", id: "15" },
  //   { name: "Jhon", number: "3235-43-51", id: "16" },
  //   { name: "Clark", number: "3235-43-21", id: "17" },
  // ]);
  // const dispatch = useDispatch();
  const contactos = useSelector((state) => state.contacts);
  const error = useSelector((state) => state.error);

  const [find, setFind] = useState("");

  const changeFilter = (data) => {
    setFind(data);
  };
  const findContact = () => {
    const nameToLowerCase = find.toLowerCase();
    return contactos.filter((contact) =>
      contact.name.toLowerCase().includes(nameToLowerCase)
    );
  };

  return (
    <div>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      {error && <h2>{error}</h2>}
      <ContactForm nameBtn="Add contact" />

      <h2 className={styles.title}>Contacts</h2>
      <Filter value={find} findContact={changeFilter} />
      <ContactList arr={findContact()} nameBtn="Delete" />
    </div>
  );
}
