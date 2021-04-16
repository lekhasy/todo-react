import Title from "antd/lib/typography/Title";
import { TodoAppContext } from "./App";
import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const taskList = props.taskList;
  const onCompletionStageChanged = (id, value) => {
    props.changeStatus(id, value);
  };
  return (
    <TodoAppContext.Provider
      value={{
        appName: "Todo list app name",
      }}
    >
      <div>
        <Title level={3}>{props.title}</Title>
        <div className={classes.todoListContainer}>
          {taskList.map((task) => (
            <TaskItem
              taskItem={task}
              onCompletionStageChanged={onCompletionStageChanged}
            />
          ))}
        </div>
      </div>
    </TodoAppContext.Provider>
  );
}

export default TodoList;
