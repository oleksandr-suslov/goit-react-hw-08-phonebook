import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(state)),
    [key, state]
  );
  return [state, setState];
};

export default function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { name: "David", number: "3235-43-21", id: "12" },
    { name: "Rony", number: "3235-43-51", id: "13" },
    { name: "Bob", number: "3235-43-81", id: "14" },
    { name: "Ivan", number: "3235-43-91", id: "15" },
    { name: "Jhon", number: "3235-43-51", id: "16" },
    { name: "Clark", number: "3235-43-21", id: "17" },
  ]);

  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem("contacts")) ?? [
  //       { name: "David", number: "3235-43-21", id: "12" },
  //       { name: "Rony", number: "3235-43-51", id: "13" },
  //       { name: "Bob", number: "3235-43-81", id: "14" },
  //       { name: "Ivan", number: "3235-43-91", id: "15" },
  //       { name: "Jhon", number: "3235-43-51", id: "16" },
  //       { name: "Clark", number: "3235-43-21", id: "17" },
  //     ]
  //   );
  // });
  const [find, setFind] = useState("");

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };
  const addContact = (newContact) => {
    const dublicateName = contacts.some(
      (cont) => cont.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (dublicateName) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts((prevState) => [...prevState, newContact]);
    }
  };
  const changeFilter = (data) => {
    setFind(data);
  };
  const findContact = () => {
    const nameToLowerCase = find.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameToLowerCase)
    );
  };
  // useEffect(
  //   () => window.localStorage.setItem("contacts", JSON.stringify(contacts)),
  //   [contacts]
  // );

  return (
    <div>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm nameBtn="Add contact" onSubmit={addContact} />

      <h2 className={styles.title}>Contacts</h2>
      <Filter value={find} findContact={changeFilter} />
      <ContactList
        arr={findContact()}
        nameBtn="Delete"
        onSubmit={deleteContact}
      />
    </div>
  );
}
