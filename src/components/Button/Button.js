import styles from "./Button.module.css";

export default function Button({ type, name, clickOnBtn, id }) {
  return (
    <button className={styles.btn} type={type} onClick={clickOnBtn} id={id}>
      {name}
    </button>
  );
}
