import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import Login from "./Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppHeader from "./AppHeader";

export const TodoAppConText = React.createContext({
  appName: "Default App Name",
});

function App() {
  const taskList = useSelector((store) => store.todoState.taskList);

  const newTaskValue = useSelector((store) => store.todoState.newTaskName);

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  let tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavourite", "createdDate"],
    ["desc", "desc"]
  );

  if (newTaskValue) {
    tasksNotCompleted = tasksNotCompleted.filter((t) =>
      t.taskName.includes(newTaskValue)
    );
  }

  return (
    <TodoAppConText.Provider value={{ appName: "My Todo App" }}>
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path="/home">
              <div className={classes.header}>
                <AppHeader />
              </div>
              <div className={classes.taskInputContainer}>
                <TaskInput />
              </div>
              <section className={classes.taskListContainer}>
                <TodoList
                  taskList={tasksNotCompleted}
                  title={"Danh sách task"}
                />

                <TodoList
                  taskList={tasksCompleted}
                  title={"Danh sách task hoàn thành"}
                />
              </section>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoAppConText.Provider>
  );
}

export default App;
