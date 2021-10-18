import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from '@material-ui/core';
import { addContacts } from "../../redux/phonebook/operations";
import {getContacts} from '../../redux/phonebook/contacts-selectors'
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

    const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
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
    const dublicateName = contacts.some(
      (cont) => cont.name.toLowerCase() === name.toLowerCase()
    );

    if (dublicateName) {
      alert(`${[name]} is already in contacts`);
      return reset();
    } else {
      dispatch(
        addContacts({
          name: name,
          number: number,
             })
      );
      reset();
    };
  }

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.inputLabel} >
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
          
        />
      </label>
      <label className={styles.inputLabel} >
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
          
        />
      </label>

      <Button color="primary" variant="contained" type="submit"  > Add contact </Button>
    </form>
  );
}
