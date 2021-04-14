import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React, { useState } from "react";
import MockTask from "./MockTasks";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [taskList, setTaskList] = useState(MockTask);


  const changeStatus = (id, value) => {

    const newTasklist = taskList.map(el => el.id === id ? { ...el, isCompleted: value,completedDate: value? new Date(): "" } : el);
    setTaskList(newTasklist)

  }

  const tasksNotCompleted = taskList.filter(e => e.isCompleted === false).sort((a, b) => {
    return b.createdDate.getTime() - a.createdDate.getTime();
  });
  const tasksCompleted = taskList.filter(e => e.isCompleted === true).sort((a, b) => {
    return b.completedDate.getTime() - a.completedDate.getTime();
  });

  const handleAddTask = (newTaskName) => {
    setTaskList([...taskList, { taskName: newTaskName, id: uuidv4(), isCompleted: false,createdDate:new Date() }]);
  }
  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput handleAddTask={handleAddTask} />
      </div>
      <section className={classes.taskListContainer}>
        <Title level={3}>Danh sách task</Title>
        <TodoList changeStatus={changeStatus} taskList={tasksNotCompleted} />
        <Title level={3}>Danh sách task hoàn thành</Title>
        <TodoList changeStatus={changeStatus} taskList={tasksCompleted} />
      </section>
    </div>
  );
}

export default App;
