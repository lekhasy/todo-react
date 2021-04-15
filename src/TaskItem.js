import React, { useState } from "react";
import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import { TodoAppConText } from "./App";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function TaskItem({
  taskItem,
  onChooseFavouriteTask,
  onCompletionStageChanged,
}) {
  const appContextValue = React.useContext(TodoAppConText);

  const [starState, setStarState] = useState();

  const handleChange = (e) => {
    onCompletionStageChanged(taskItem.id, e.target.checked);
  };

  const handleFavStatus = (e) => {
    onChooseFavouriteTask(taskItem.id, e.target.checked);
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
      {/* <p>{appContextValue.appName}</p> */}
      <Checkbox
        className={taskItem.isCompleted ? classes.hideStarFav : classes.starFav}
        onChange={handleFavStatus}
        checked={taskItem.isFavourite}
      >
        <AiOutlineStar
          className={taskItem.isFavourite ? classes.starOff : classes.starOn}
        ></AiOutlineStar>
        <AiFillStar
          className={taskItem.isFavourite ? classes.starOn : classes.starOff}
          style={{ color: "orange" }}
        ></AiFillStar>
      </Checkbox>
    </div>
  );
}

export default TaskItem;
