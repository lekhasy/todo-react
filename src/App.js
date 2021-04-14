import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import { TodoList, DoneList } from "./TodoList";
import { useState } from "react";
import MockTasks from "./MockTasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskList, setTaskList] = useState(MockTasks);

  const onHandleCompletionStateChange = (taskId, val) => {
    const newTaskList = taskList.map((t) =>
      t.id === taskId
        ? { ...t, completed: val, dayDone: new Date().getTime() }
        : t
    );
    setTaskList(newTaskList);
  };

  const handleAddNewTask = (newTaskName) => {
    setTaskList([
      ...taskList,
      {
        taskName: newTaskName,
        completed: false,
        id: uuidv4(),
        dayCreated: new Date().getTime(),
        dayDone: "",
      },
    ]);
  };

  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput onNewTaskAdded={handleAddNewTask} />
      </div>
      <section className={classes.taskListContainer}>
        <TodoList
          handelCompletionStateChange={onHandleCompletionStateChange}
          taskList={taskList}
        />

        <DoneList
          handelCompletionStateChange={onHandleCompletionStateChange}
          taskList={taskList}
        />
      </section>
    </div>
  );
}

export default App;
