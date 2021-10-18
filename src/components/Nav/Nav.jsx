import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { getIsLoggedIn } from '../../redux/auth/authSelector';
import styles from './Nav.module.css';

export default function Nav () {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={styles.wrapper}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <nav className={styles.nav}>
              <NavLink
                to="/"
                exact
                className={styles.link}
                activeClassName="activeLink"
              >
                Home
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  to="/contacts"
                  exact
                  className={styles.link}
                  activeClassName="activeLink"
                >
                  Contacts
                </NavLink>
               )} 
            </nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

