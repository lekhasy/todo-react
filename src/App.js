import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import { useState } from "react";
import MockTasks from "./MockTasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskList, setTaskList] = useState(MockTasks);

  const handleCompletionStateChanged = (taskId, val) => {
    const newTaskList = taskList.map((t) =>
      t.id === taskId ? { ...t, completed: val } : t
    );
    setTaskList(newTaskList);
  };

  const handleAddNewTask = (newTaskName) => {
    setTaskList([
      ...taskList,
      {
        taskName: newTaskName,
        id: uuidv4(),
        completed: false,
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
          onCompletionStateChanged={handleCompletionStateChanged}
          taskList={taskList}
        />
      </section>
    </div>
  );
}

export default App;
