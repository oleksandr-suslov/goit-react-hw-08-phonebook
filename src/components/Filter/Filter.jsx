import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/phonebook/phonebookActions";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const findContact = (name) => {
    dispatch(filterContact(name.toLowerCase()));
  };

  return (
    <div className={styles.contactForm}>
      <label className={styles.inputLabel}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={(e) => findContact(e.target.value)}
          required
        />
      </label>
    </div>
  );
}
