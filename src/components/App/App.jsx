import { Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Copyright } from "@material-ui/icons";
// import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

import Nav from "../Nav/Nav";
import Section from "../Section/Section";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {
  // getIsLoggedIn,
  getCurrentUser,
  // getAuthError,
} from "../../redux/auth/authSelector";
import { getCurrent } from "../../redux/auth/authOperations";
import styles from "./App.module.css";

const HomePage = lazy(() =>
  import("../page/HomePage" /* webpackChunkName: "home" */)
);
const AuthPage = lazy(() =>
  import("../page/AuthPage" /* webpackChunkName: "auth" */)
);
const LoginPage = lazy(() =>
  import("../page/LoginPage" /* webpackChunkName: "login" */)
);
const ContactsPage = lazy(() =>
  import("../page/ContactsPage" /* webpackChunkName: "contacts" */)
);

export default function App() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  // const isError = useSelector(getAuthError);
  const isUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <Section className={styles.sectionApp}>
      {/* <ToastContainer autoClose={2000} /> */}
      <Nav />
      {!isUser && (
        <Suspense
          fallback={
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <AuthPage />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      )}
      <div className={styles.footer}>
        <Copyright />
        Created by Suslov | 2021
      </div>
    </Section>
  );
}
