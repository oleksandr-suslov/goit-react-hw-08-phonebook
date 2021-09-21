import styles from "./Button.module.css";

export default function Button({ type, name, clickOnBtn, id, children }) {
  return (
    <button className={styles.btn} type={type} onClick={clickOnBtn} id={id}>
      {name}
      {children}
    </button>
  );
}
