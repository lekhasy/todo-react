import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
  const isLoggedIn = useSelector((store) => store.authState.isLoggedIn);

  return isLoggedIn ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
