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

    const newTasklist = taskList.map(el => el.id === id ? { ...el, isCompleted: value } : el);
    setTaskList(newTasklist)

  }

  const unChecked = taskList.filter(e=> e.isCompleted === false);
  const checked = taskList.filter(e=> e.isCompleted === true);

  const handleAddTask = (newTaskName) => {
      setTaskList([...taskList,{taskName:newTaskName,id:uuidv4(), isCompleted:false}]);
  }
  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput handleAddTask={handleAddTask}/>
      </div>
      <section className={classes.taskListContainer}>
        <TodoList changeStatus={changeStatus} taskList={unChecked} />
        <p>123312312</p>
        <TodoList changeStatus={changeStatus} taskList={checked} />
      </section>
    </div>
  );
}

export default App;
