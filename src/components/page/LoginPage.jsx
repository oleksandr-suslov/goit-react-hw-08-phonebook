import { useDispatch } from "react-redux";
import { useState } from "react";

import { Button } from "@material-ui/core";
import { Visibility, VisibilityOff, AlternateEmail } from "@material-ui/icons";
import { logIn } from "../../redux/auth/authOperations";
import styles from "./Page.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "userMail":
        return setUserMail(value);
      case "userPassword":
        return setUserPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email: userMail, password: userPassword }));
    setUserMail("");
    setUserPassword("");
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}> Log In</h2>

      <label title="E-mail" className={styles.formLabel}>
        <AlternateEmail className={styles.formIcons} />
        <input
          type="email"
          name="userMail"
          value={userMail}
          className={styles.formInput}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className={styles.ariaLabel}>E-mail</span>
      </label>
      <label title="Password" className={styles.formLabel}>
        {isVisible ? (
          <Visibility onClick={handleClick} className={styles.formIcons} />
        ) : (
          <VisibilityOff onClick={handleClick} className={styles.formIcons} />
        )}

        <input
          type={isVisible ? "text" : "password"}
          name="userPassword"
          value={userPassword}
          className={styles.formInput}
          onChange={handleChange}
          minLength={7}
          autoComplete="off"
          required
        />
        <span className={styles.ariaLabel}>Password</span>
      </label>

      <Button color="primary" variant="contained" type="submit">
        LogIn
      </Button>
    </form>
  );
}
