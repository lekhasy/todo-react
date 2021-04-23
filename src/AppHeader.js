import classes from "./App.module.css";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { AttempLogout } from "./redux/ActionCreator";
import { useHistory } from "react-router";

const AppHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    if (window.confirm("Ban muon dang xuat?")) {
      dispatch(AttempLogout());
      history.push("/login");
    }
  };

  return (
    <div className={classes.appHeader}>
      <Title className={classes.header}>Todo app</Title>
      <Button className={classes.btn} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default AppHeader;
