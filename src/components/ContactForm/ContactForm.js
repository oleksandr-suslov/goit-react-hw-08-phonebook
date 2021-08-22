import { Component } from "react";
// import shortid from "shortid";
import Button from "../Button/Button";

import styles from "./ContactForm.module.css";

const shortid = require("shortid");

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state, id: shortid.generate() });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label className={styles.inputLabel} htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
            id={this.nameInputId}
          />
        </label>
        <label className={styles.inputLabel} htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
            id={this.numberInputId}
          />
        </label>

        <Button name="Add contact" type="submit" id={this.nameInputId} />
      </form>
    );
  }
}
