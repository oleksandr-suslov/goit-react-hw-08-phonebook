import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/actions";
import Button from "../Button/Button";

import styles from "./ContactForm.module.css";

const shortid = require("shortid");

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addNewContact({
        name: name,
        number: number,
        id: shortid.generate(),
      })
    );
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.inputLabel} htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          className={styles.input}
          id={nameInputId}
        />
      </label>
      <label className={styles.inputLabel} htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          className={styles.input}
          id={numberInputId}
        />
      </label>

      <Button name="Add contact" type="submit" id={nameInputId} />
    </form>
  );
}
