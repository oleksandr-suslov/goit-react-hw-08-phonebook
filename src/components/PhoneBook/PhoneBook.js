import React, { Component } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { name: "David", number: "3235-43-21", id: "12" },
      { name: "Rony", number: "3235-43-51", id: "13" },
      { name: "Bob", number: "3235-43-81", id: "14" },
      { name: "Ivan", number: "3235-43-91", id: "15" },
      { name: "Jhon", number: "3235-43-51", id: "16" },
      { name: "Clark", number: "3235-43-21", id: "17" },
    ],
    filter: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  addContact = (newContact) => {
    const dublicateName = this.state.contacts
      .map((cont) => cont.name)
      .includes(newContact.name);
    if (dublicateName) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    const nameToLowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameToLowerCase)
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <ContactForm nameBtn="Add contact" onSubmit={this.addContact} />

        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} findContact={this.changeFilter} />
        <ContactList
          arr={this.findContact()}
          nameBtn="Delete"
          onSubmit={this.deleteContact}
        />
      </div>
    );
  }
}
