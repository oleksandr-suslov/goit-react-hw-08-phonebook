import styles from "./Filter.module.css";

export default function Filter({ value, findContact }) {
  return (
    <form className={styles.contactForm}>
      <label className={styles.inputLabel}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => findContact(e.target.value)}
          required
        />
      </label>
    </form>
  );
}
