import Button from "../Button/Button";
import styles from "./ContactList.module.css";

export default function ContactList({ arr, nameBtn, clickOnBtn }) {
  return (
    <ul className={styles.list}>
      {arr.map((item) => (
        <li className={styles.item} id={item.id}>
          <span className={styles.itemName}>{item.name}:</span>
          <span className={styles.itemPhone}> {item.number}</span>
          <Button name={nameBtn} clickOnBtn={clickOnBtn} />
        </li>
      ))}
    </ul>
  );
}
