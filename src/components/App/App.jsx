import { Switch, Redirect, Route } from "react-router-dom";
import { useEffect,Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Copyright } from '@material-ui/icons';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';

import Nav from '../Nav/Nav'
import Section from "../Section/Section"
import {getIsLoggedIn} from '../../redux/auth/authSelector'
import styles from "./App.module.css"



const HomePage = lazy(() =>
  import('../page/HomePage' /* webpackChunkName: "home" */),
);
const AuthPage = lazy(() =>
  import('../page/AuthPage' /* webpackChunkName: "auth" */),
);
const LoginPage = lazy(() =>
  import('../page/LoginPage' /* webpackChunkName: "login" */),
);
const ContactsPage = lazy(() =>
  import('../page/ContactsPage' /* webpackChunkName: "contacts" */),
);



export default function App() {

  const isLoggedIn = useSelector(getIsLoggedIn);
  // const dispatch = useDispatch();
  // const isError = useSelector(getErrorStatus);

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  return (
    <Section className={styles.sectionApp}>
       <ToastContainer autoClose={2000} />
      <Nav />

       <div className="viewContainer">
          <Suspense
            fallback={
              <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            }
          >
            <Switch>

              <Route path="/" exact>
                <HomePage />
              </Route>
        
              <Route path="/login" restricted>
                <LoginPage />
              </Route>

              <Route path="/register" restricted>
                <AuthPage />
              </Route>

              <Route path="/contacts">
                <ContactsPage />
              </Route>

            </Switch>
            {isLoggedIn ? <Redirect to="/contacts" /> : <Redirect to="/" />}
          </Suspense>
      </div>

      <div className={styles.footer}>
        <Copyright  />
        Created by Suslov | 2021
      </div>
    
    </Section>
  );
}