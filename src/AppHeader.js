import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import classes from "./Header.module.css";
import { ChangeStatusLogOut } from "./redux/ActionCreator";

function AppHeader() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(ChangeStatusLogOut(false));
    localStorage.setItem("isLoggIn", false);
    history.push("/login");
  };

  return (
    <div className={classes.header}>
      <Title>Todo app</Title>
      <Button onClick={handleLogOut}>Logout</Button>
    </div>
  );
}

export default AppHeader;
