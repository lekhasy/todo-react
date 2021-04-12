import { Input } from "antd";

function TaskInput() {
  const handlePressEnter = () => {};

  return <Input placeholder="Nhập tên task rồi ấn enter" onPressEnter={handlePressEnter} />;
}

export default TaskInput;
