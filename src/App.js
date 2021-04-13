import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import MockTasks from "./MockTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

function App() {
  const [taskList, setTaskList] = useState(MockTasks);

  const handleCompletedChange = (itemId, event) => {
    const newTaskList = taskList.map((task) =>
      task.id === itemId ? { ...task, completed: event } : task
    );
    // setTaskList(newTaskList);
    const splitList = _.partition(newTaskList, { completed: false });
    const completedTasks = [...splitList[1]];
    const uncompletedTasks = _.sortBy(splitList[0], [ 'time']).reverse();
    setTaskList(_.concat(uncompletedTasks, completedTasks));
    // console.log(taskList);
  };

  const handleAddNewTask = (newTaskName) => {
    const newTask = {
      id: uuidv4(),
      taskName: newTaskName,
      completed: false,
      time: new Date().getTime()
    };
    setTaskList([newTask, ...taskList]);
  };
  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput onNewTaskAdd={handleAddNewTask} />
      </div>
      <section className={classes.taskListContainer}>
        <TodoList
          taskList={taskList}
          onHandleCompletedChange={handleCompletedChange}
        />
      </section>
    </div>
  );
}

export default App;
