import classes from "./App.module.css";
import "antd/dist/antd.css";
import React from "react";
import Login from "./Login";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AppHeader from "./AppHeader";
import Home from "./Home";
import { useSelector } from "react-redux";

export const TodoAppConText = React.createContext({
  appName: "Default App Name",
});

function App() {
  let isLoggedIn = useSelector((store) => store.authState.isLoggedIn);
  if (isLoggedIn === "false") {
    isLoggedIn = false;
  } else if (isLoggedIn === "true") {
    isLoggedIn = true;
  }

  return (
    <TodoAppConText.Provider value={{ appName: "My Todo App" }}>
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              {isLoggedIn ? <Home /> : <Redirect to="/login" />}
              <div className={classes.header}>
                <AppHeader />
              </div>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoAppConText.Provider>
  );
}

export default App;
