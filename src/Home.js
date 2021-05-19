import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "./AppHeader";
import TaskInput from "./TaskInput";
import TodoList from "./TodoList";
import classes from "./Home.module.css";
import { useEffect } from "react";
import { GetTodosFromAPI } from "./redux/ActionCreator";

export default function Home() {
  const taskList = useSelector((store) => store.todoState.taskList);

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  const newTaskValue = useSelector((store) => store.todoState.newTaskName);

  const dispatch = useDispatch();

  let tasksNotCompleted = _.orderBy(
    partitions[1],
    ["isFavourite", "createdDate"],
    ["desc", "desc"]
  );

  useEffect(() => {
    dispatch(GetTodosFromAPI());
  }, [dispatch]);

  console.log(taskList);
  if (newTaskValue) {
    tasksNotCompleted = tasksNotCompleted.filter((t) =>
      t.taskName.includes(newTaskValue)
    );
  }

  return (
    <>
      <AppHeader></AppHeader>
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
