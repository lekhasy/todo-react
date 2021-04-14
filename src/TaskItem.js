import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import "antd/dist/antd.css";
import { Typography, Space } from "antd";

function TaskItem({ item, onCompletionStateChange }) {
  function onChangeCompletion(event) {
    onCompletionStateChange(item.id, event.target.checked);
  }

  return (
    <div className={classes.todoContainer}>
      <Checkbox onChange={onChangeCompletion} checked={item.completed}>
        <text className={item.completed ? classes.textDone : classes.textTodo}>
          {item.taskName}
        </text>
      </Checkbox>
    </div>
  );
}

export default TaskItem;
