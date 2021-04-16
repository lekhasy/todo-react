import React from "react";
import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import { AiFillStar } from "react-icons/ai";

function TaskItem({
  taskItem,
  onChooseFavouriteTask,
  onCompletionStageChanged,
}) {
  const handleChange = (e) => {
    onCompletionStageChanged(taskItem.id, e.target.checked);
  };

  const handleFavStatus = (e) => {
    onChooseFavouriteTask(taskItem.id, !taskItem.isFavourite);
    console.log(e.target.checked);
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

      {taskItem.isCompleted ? null : (
        <AiFillStar
          onClick={handleFavStatus}
          style={{ color: taskItem.isFavourite ? "orange" : "gainsboro" }}
        />
      )}
    </div>
  );
}

export default TaskItem;
