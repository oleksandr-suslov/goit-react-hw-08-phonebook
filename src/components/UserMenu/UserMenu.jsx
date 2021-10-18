import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { getUserEmail } from "../../redux/auth/authSelector";
import styles from "./UserMenu.module.css";

import { Button } from "@material-ui/core";

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div className={styles.userMenu}>
      <p className={styles.text}>Welcome,</p>
      <p className={styles.mail}>{email}</p>
      <Button
              variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Exit
      </Button>
    </div>
  );
};

export default UserMenu;
