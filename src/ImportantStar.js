import React from "react";
import { ImportantContext } from "./App";
import classes from "./ImportantStar.module.css";

const ImportantStar = ({ taskItem }) => {
  const conText = React.useContext(ImportantContext);
  const handleClick = () => {
    const toggleImportant = taskItem.isImportant;
    conText.handleImportantTask(taskItem.id, toggleImportant);
  };
  return (
    <div
      className={
        taskItem.isImportant
          ? `${classes.star} ${classes.starChecked}`
          : classes.star
      }
      onClick={handleClick}
    >
      <span className="fa fa-star"></span>
    </div>
  );
};

export default ImportantStar;
