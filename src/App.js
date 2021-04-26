import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppHeader from "./AppHeader";
import PrivateRoute from "./PrivateRoute";
import AxiosPlayground from "./AxiosPlayground";
import Home from "./Home";

export const TodoAppConText = React.createContext({
  appName: "Default App Name",
});

function App() {
  return (
    <TodoAppConText.Provider value={{ appName: "My Todo App" }}>
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
    </TodoAppConText.Provider>
  );
}

export default App;
