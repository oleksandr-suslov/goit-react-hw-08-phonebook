import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelector";

export default function PrivateRoute({
  children,
  redirectTo = "/login",
  ...props
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
