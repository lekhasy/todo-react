import { Checkbox } from "antd";
import ImportantStar from "./ImportantStar";
import classes from "./TaskItem.module.css";
function TaskItem({ taskItem, onCompletionStageChanged }) {
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
      <ImportantStar taskItem={taskItem} />
    </div>
  );
}

export default TaskItem;
