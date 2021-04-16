import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React, { useState } from "react";
import MockTask from "./MockTasks";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const TodoAppContext = React.createContext();

function App() {
  const [taskList, setTaskList] = useState(MockTask);

  const changeStatus = (id, value) => {
    const newTasklist = taskList.map((el) =>
      el.id === id
        ? { ...el, isCompleted: value, completedDate: value ? new Date() : "" }
        : el
    );
    setTaskList(newTasklist);
  };

  const changeFavorite = (id, value) => {
    const newTaskList = taskList.map((el) =>
      el.id === id ? { ...el, isFavorite: value } : el
    );
    setTaskList(newTaskList);
    console.log(value);
  };
  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["completedDate"], ["desc"]);

  const tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavorite", "createdDate"],
    ["desc", "desc"]
  );

  const handleAddTask = (newTaskName) => {
    setTaskList([
      ...taskList,
      {
        taskName: newTaskName,
        id: uuidv4(),
        isCompleted: false,
        createdDate: new Date(),
        isFavorite: 0,
      },
    ]);
  };
  return (
    <div className={classes.app}>
      <Title className={classes.header}>Todo app</Title>
      <div className={classes.taskInputContainer}>
        <TaskInput handleAddTask={handleAddTask} />
      </div>
      <section className={classes.taskListContainer}>
        <TodoList
          changeStatus={changeStatus}
          changeFavorite={changeFavorite}
          taskList={tasksNotCompleted}
          title={"Danh sách task"}
        />

        <TodoList
          changeStatus={changeStatus}
          changeFavorite={changeFavorite}
          taskList={tasksCompleted}
          title={"Danh sách task hoàn thành"}
        />
      </section>
    </div>
  );
}

export default App;
