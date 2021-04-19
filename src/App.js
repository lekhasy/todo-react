import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewTask,
  ChangeStatusComplete,
  ChooseFavouriteTask,
} from "./redux/ActionCreator";

export const TodoAppConText = React.createContext({ appName: "Default App Name" });

function App() {
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.todoState.taskList);

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  const tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavourite", "createdDate"],
    ["desc", "desc"]
  );

  const changeStatus = (id, value) => {
    dispatch(ChangeStatusComplete(id, value));
  };

  const chooseFav = (id, value) => {
    dispatch(ChooseFavouriteTask(id, value));
  };
  const handleAddTask = (inputValue) => {
    dispatch(AddNewTask(inputValue));
  };
  return (
    <TodoAppConText.Provider value={{ appName: "My Todo App" }}>
      <div className={classes.app}>
        <Title className={classes.header}>Todo app</Title>
        <div className={classes.taskInputContainer}>
          <TaskInput handleAddTask={handleAddTask} />
        </div>
        <section className={classes.taskListContainer}>
          <TodoList
            changeStatus={changeStatus}
            chooseFav={chooseFav}
            taskList={tasksNotCompleted}
            title={"Danh sách task"}
          />

          <TodoList
            changeStatus={changeStatus}
            taskList={tasksCompleted}
            chooseFav={chooseFav}
            title={"Danh sách task hoàn thành"}
          />
        </section>
      </div>
    </TodoAppConText.Provider>
  );
}

export default App;
