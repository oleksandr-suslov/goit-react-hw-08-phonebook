import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { name: "David", number: "3235431", id: "12" },
      { name: "Rony", number: "3235431", id: "13" },
      { name: "Bob", number: "3235431", id: "14" },
    ],
    name: "",
    number: "",
  };

  clickOnBtn = (e) => {
    // this.setState({ login: e.target.value });
    console.log("click");
  };

  // deleteContact = (e) => {
  //   console.log("delete");
  // };
  handleSubmit = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <ContactForm nameBtn="Add contact" onSubmit={this.handleSubmit} />

        <h2 className={styles.title}>Contacts</h2>
        <Filter name="filter" clickOnBtn={this.clickOnBtn} />
        <ContactList
          arr={this.state.contacts}
          nameBtn="Delete"
          clickOnBtn={this.deleteContact}
        />
      </div>
    );
  }
}
