import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeInputValue } from "./redux/ActionCreator";
function TaskInput({ handleAddTask }) {
  const dispatch = useDispatch();

  const inputValue = useSelector((store) => store.toDoState.newTaskName);

  const handlePressEnter = () => {
    if (inputValue === "") {
      return;
    }
    handleAddTask(inputValue);
    dispatch(ChangeInputValue(""));
  };

  const handleOnChange = (e) => {
    dispatch(ChangeInputValue(e.target.value));
  };

  return (
    <Input
      placeholder="Nhập tên task rồi ấn enter"
      value={inputValue}
      onChange={handleOnChange}
      onPressEnter={handlePressEnter}
    />
  );
}

export default TaskInput;
