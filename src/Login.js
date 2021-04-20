import { Button } from "antd";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ChangeStatusLogIn } from "./redux/ActionCreator";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const handleLogIn = () => {
    if (!userName || !password) {
      alert("Sai ten tai khoan mat khau");
      return;
      }
    
      dispatch(ChangeStatusLogIn(true));
      localStorage.setItem("isLoggIn", true);
    history.push("/home");
  };

  // checkLogINStatus at the start of the component mounting
  useEffect(() => {
    if (localStorage.getItem("isLoggIn") == "true")
      history.push("/home");
    
  });

  return (
    <div>
      <Input
        placeholder="User name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogIn}>Đăng nhập</Button>
    </div>
  );
}

export default Login;
