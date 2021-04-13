import Title from "antd/lib/typography/Title";
import classes from "./TodoList.module.css";
import TaskItem from "./TaskItem"

function TodoList({ taskList, onHandleCompletedChange }) {
  const handleCompletedChange = (itemId, event) => {
    onHandleCompletedChange(itemId, event);
  };
  return (
    <div className={classes.todoListContainer}>
      <Title level={3}>Danh sách task</Title>
      {taskList.map((task) => (
        <TaskItem item={task} key={task.id} onHandleCompletedChange={handleCompletedChange} />
      ))}
    </div>
  );
}

export default TodoList;
