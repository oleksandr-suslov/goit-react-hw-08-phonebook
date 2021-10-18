import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import Section from "../Section/Section";

import { Button } from "@material-ui/core";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
  AlternateEmail,
} from "@material-ui/icons";
import styles from "./Page.module.css";

export default function AuthPage() {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "userEmail":
        setUserMail(value);
        break;
      case "userPassword":
        setUserPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(
      register({
        name: userName,
        email: userMail,
        password: userPassword,
      })
    );

    reset();
  };

  const reset = () => {
    setUserName("");
    setUserMail("");
    setUserPassword("");
    setIsVisible(false);
  };

  return (
    <Section>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={styles.formTitle}>Registration Form</h2>
        <label title="UserName" className={styles.formLabel}>
          <AccountCircle className={styles.formIcons} />
          <input
            type="text"
            name={styles.userName}
            value={userName}
            className={styles.formInput}
            onChange={handleChange}
            autoComplete="off"
                        required
          />
          <span className={styles.ariaLabel}>Name</span>
        </label>
        <label title="E-mail" className={styles.formLabel}>
          <AlternateEmail className={styles.formIcons} />
          <input
            type="email"
            name="userEmail"
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
          Register
        </Button>
      </form>
    </Section>
  );
}
