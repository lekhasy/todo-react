import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
import { Rate } from "antd";
function TaskItem({
  taskItem,
  onCompletionStageChanged,
  onCompletionChangedFavorite,
}) {
  const handleChange = (e) => {
    onCompletionStageChanged(taskItem.id, e.target.checked);
  };
  const handleChangeFavorite = (e) => {
    onCompletionChangedFavorite(taskItem.id, e);
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
      <Rate
        count={1}
        onChange={handleChangeFavorite}
        value={taskItem.isFavorite}
      />
    </div>
  );
}

export default TaskItem;
