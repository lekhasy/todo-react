import { Input } from "antd";
import { useState } from "react";

function TaskInput({ onNewTaskAdded }) {
  const [inputVal, setInputVal] = useState("");

  const handlePressEnter = () => {
    if (inputVal === "") {
      return;
    }

    onNewTaskAdded(inputVal);

    setInputVal("");
  };

  return (
    <Input
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      placeholder="Nhập tên task rồi ấn enter"
      onPressEnter={handlePressEnter}
    />
  );
}

export default TaskInput;
