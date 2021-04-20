import { Button } from "antd";
import { Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginSuccess } from "./redux/ActionCreator";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!userName || !password) {
      alert("Tài khoản hoặc mật khẩu không đúng");
      return;
    }
    dispatch(LoginSuccess());
    history.push("/home");
  };

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
      <Button onClick={handleLogin}>Đăng nhập</Button>
    </div>
  );
}

export default Login;
