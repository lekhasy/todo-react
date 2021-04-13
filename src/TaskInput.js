import { Input } from "antd";
import {useState} from "react"

function TaskInput({onNewTaskAdd}) {
  const [taskName, setTaskName] = useState("")
  const handlePressEnter = () => {
    if (taskName === ""){
      return
    };
    onNewTaskAdd(taskName);
    setTaskName("");
  };

  return <Input value={taskName} placeholder="Nhập tên task rồi ấn enter" onPressEnter={handlePressEnter} onChange={(event) => setTaskName(event.target.value)} />;

}

export default TaskInput;
