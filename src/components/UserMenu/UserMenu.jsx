import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { getUserName } from "../../redux/auth/authSelector";
import styles from "./UserMenu.module.css";

import { Button } from "@material-ui/core";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={styles.userMenu}>
      <p className={styles.text}>Welcome,</p>
      <p className={styles.name}>{name}</p>
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
