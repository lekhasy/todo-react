import Title from "antd/lib/typography/Title";
import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";

function TodoList({ taskList, onCompletionStateChanged }) {
  const handleCompletionStateChanged = (taskId, val) => {
    onCompletionStateChanged(taskId, val);
  };

  return (
    <div className={classes.todoListContainer}>
      <Title level={3}>Danh sách task</Title>
      {taskList.map((task) => (
        <TaskItem
          onCompletionStateChanged={handleCompletionStateChanged}
          item={task}
        />
      ))}
    </div>
  );
}

export default TodoList;
