import styles from "./Button.module.css";

export default function Button({ type, name, clickOnBtn }) {
  return (
    <button className={styles.btn} type={type} onClick={clickOnBtn}>
      {name}
    </button>
  );
}
