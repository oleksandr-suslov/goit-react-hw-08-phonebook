import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/login" className={styles.link}>
        LogIn
      </NavLink>
      <NavLink to="/register" className={styles.link}>
        SignUp
      </NavLink>
    </div>
  );
}
