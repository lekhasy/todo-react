import React from "react";
import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import { AiFillStar } from "react-icons/ai";

function TaskItem({
  taskItem,
  onChooseFavoriteTask,
  onCompletionStageChanged,
}) {
  const handleChange = (e) => {
    onCompletionStageChanged(taskItem.id, !taskItem.isCompleted);
  };

  const handleFavStatus = (e) => {
    onChooseFavoriteTask(taskItem.id, !taskItem.isFavorite);
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
          style={{ color: taskItem.isFavorite ? "orange" : "gainsboro" }}
        />
      )}
    </div>
  );
}

export default TaskItem;
