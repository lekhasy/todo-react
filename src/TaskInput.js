import { Input } from "antd";
import React from "react";

function TaskInput({handleAddTask}) {
  const [inputValue,setValue] = React.useState("");
  
  const handlePressEnter = () => {
    if(inputValue === ""){
      return;
    }
    handleAddTask(inputValue);
    setValue("");
  };

  const handleOnChange = (e) =>{
    setValue(e.target.value);
  }

  return <Input placeholder="Nhập tên task rồi ấn enter" value={inputValue} onChange={handleOnChange} onPressEnter={handlePressEnter} />;
}

export default TaskInput;
