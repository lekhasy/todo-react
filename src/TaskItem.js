import React, { useState } from "react";
import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import { TodoAppConText } from "./App";

function TaskItem({ taskItem, onCompletionStageChanged }) {
  const appContextValue = React.useContext(TodoAppConText);

  const handleChange = (e) => {
    onCompletionStageChanged(taskItem.id, e.target.checked);
  };
  return (
    <div className={classes.todoContainer}>
      <Checkbox
        id={taskItem.id}
        className={taskItem.isCompleted ? classes.completed : ""}
        onChange={handleChange}
        checked={taskItem.isCompleted}
      >
        {taskItem.taskName}
      </Checkbox>
      <p>{appContextValue.appName}</p>
    </div>
  );
}

export default TaskItem;
