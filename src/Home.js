import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

function Home() {
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
    <>
      <div className={classes.taskInputContainer}>
        <TaskInput />
      </div>
      <section className={classes.taskListContainer}>
        <TodoList taskList={tasksNotCompleted} title={"Danh sách task"} />

        <TodoList
          taskList={tasksCompleted}
          title={"Danh sách task hoàn thành"}
        />
      </section>
    </>
  );
}

export default Home;
