import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeInputValue, AddNewTask } from "./redux/ActionCreator";

function TaskInput() {
  const dispatch = useDispatch();

  const inputValue = useSelector((store) => store.todoState.newTaskName);

  const handlePressEnter = () => {
    if (inputValue === "") {
      return;
    }

    dispatch(AddNewTask(inputValue));
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
