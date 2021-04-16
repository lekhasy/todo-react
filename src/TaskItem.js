import { Checkbox } from "antd";
import { TodoAppContext } from "./App";
import React from "react";
import classes from "./TaskItem.module.css";
function TaskItem({ taskItem, onCompletionStageChanged }) {
  const appContextValue = React.useContext(TodoAppContext);

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
