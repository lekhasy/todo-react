import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React, { useState } from "react";
import MockTask from "./MockTasks";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { SetTaskList } from "./redux/ActionCreator";

export const TodoAppConText = React.createContext();

function App() {
  // const [taskList, setTaskList] = useState(MockTask);

  const dispatch = useDispatch();

  const taskList = useSelector((store) => store.setTaskState.taskList);
  console.log(taskList);
  const changeStatus = (id, value) => {
    const newTasklist = taskList.map((el) =>
      el.id === id
        ? { ...el, isCompleted: value, completedDate: value ? new Date() : "" }
        : el
    );
    // setTaskList(newTasklist);
    dispatch(SetTaskList(newTasklist));
  };

  const chooseFav = (id, value) => {
    const newTasklist = taskList.map((el) =>
      el.id === id ? { ...el, isFavourite: value } : el
    );
    // setTaskList(newTasklist);
    dispatch(SetTaskList(newTasklist));
  };

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  const tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavourite", "completedDate"],
    ["desc", "desc"]
  );

  const handleAddTask = (newTaskName) => {
    // setTaskList
    dispatch(SetTaskList([
      ...taskList,
      {
        taskName: newTaskName,
        id: uuidv4(),
        isCompleted: false,
        isFavourite: false,
        createdDate: new Date(),
      },
    ]));
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
