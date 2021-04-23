import { Route } from "react-router-dom";

export default function PrivateRoute(props) {
  return <Route {...props}>{props.children}</Route>;
}
