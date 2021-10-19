import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelector";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...props
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
