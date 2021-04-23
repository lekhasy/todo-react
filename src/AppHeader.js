import { Button } from "antd";
import Title from "antd/lib/skeleton/Title";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Logout } from "./redux/ActionCreator";

function AppHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <Title>Todo app</Title>
      <Button
        onClick={() => {
          history.push("/login");
          dispatch(Logout());
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default AppHeader;
