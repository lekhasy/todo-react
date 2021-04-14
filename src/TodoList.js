import { Checkbox } from "antd";
import Title from "antd/lib/typography/Title";
import classes from "./TodoList.module.css";
import TaskItem from "./TaskItem";

function TodoList({ taskList, handelCompletionStateChange }) {
  const completionStateChange = (taskId, Val) => {
    handelCompletionStateChange(taskId, Val);
  };

  return (
    <div className={classes.todoListContainer}>
      <Title level={3}>Danh sách task</Title>
      {taskList.map((task) => {
        if (task.completed == false) {
          return (
            <TaskItem
              onCompletionStateChange={completionStateChange}
              item={task}
            />
          );
        }
      })}
    </div>
  );
}

function DoneList({ taskList, handelCompletionStateChange }) {
  const completionStateChange = (taskId, Val) => {
    handelCompletionStateChange(taskId, Val);
  };

  return (
    <div className={classes.doneListContainer}>
      <Title level={3}>Danh sách task done</Title>
      {taskList.map((task) => {
        if (task.completed) {
          return (
            <TaskItem
              onCompletionStateChange={completionStateChange}
              item={task}
            />
          );
        }
      })}
    </div>
  );
}

export { TodoList, DoneList };
