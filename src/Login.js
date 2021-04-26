import Title from "antd/lib/typography/Title";
import { Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { AttempLogin } from "./redux/ActionCreator";
import { Button } from "antd";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(store => store.authState.isLoggedIn);

  const handleLogIn = () => {
    if (!userName || !password) {
      alert("Sai ten tai khoan mat khau");
      return;
    }
    dispatch(AttempLogin());
    history.push("/home");
  };

  return (
    isLoggedIn ? <Redirect to="/home" /> : <div>
      <Title>Login</Title>
      <Input
        placeholder="User name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogIn}>Đăng nhập</Button>
    </div>
  );
}

export default Login;
