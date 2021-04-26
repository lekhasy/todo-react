import classes from "./App.module.css";
import "antd/dist/antd.css";
import React from "react";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AxiosPlayground from "./AxiosPlayground";
import Home from "./Home";

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/axiosplayground">
            <AxiosPlayground />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
