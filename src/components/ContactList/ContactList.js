import { useDispatch } from "react-redux";
import { removeContact } from "../redux/actions";

import { ReactComponent as DeleteIcon } from "../icons/bin.svg";
import Button from "../Button/Button";
import styles from "./ContactList.module.css";

export default function ContactList({ arr, nameBtn, onSubmit }) {
  const dispatch = useDispatch();
  const deleteContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul className={styles.list}>
      {arr.map((item) => (
        <li className={styles.item} key={item.id}>
          <span className={styles.itemName}>{item.name}:</span>
          <span className={styles.itemPhone}> {item.number}</span>
          <Button
            name={nameBtn}
            clickOnBtn={(evt) => {
              evt.preventDefault();
              deleteContact(evt.currentTarget.id);
            }}
            id={item.id}
            children={
              <DeleteIcon width="20" height="20" fill="rgb(71, 71, 71)" />
            }
          />
        </li>
      ))}
    </ul>
  );
}
