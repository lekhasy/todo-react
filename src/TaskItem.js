import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";

function TaskItem({ item, onCompletionStateChanged }) {
  const handleChange = (event) => {
    onCompletionStateChanged(item.id, event.target.checked);
  };

  return (
    <div className={classes.todoContainer}>
      <Checkbox onChange={handleChange} checked={item.completed}>
        {item.taskName}
      </Checkbox>
    </div>
  );
}

export default TaskItem;
