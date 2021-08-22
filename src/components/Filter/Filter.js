import styles from "./Filter.module.css";

export default function Filter({ name, clickOnBtn }) {
  return (
    <form className={styles.contactForm}>
      <label className={styles.inputLabel}>
        Find contact by name
        <input
          className={styles.input}
          ype="text"
          name={name}
          clickOnBtn={clickOnBtn}
          required
        />
      </label>
    </form>
  );
}
