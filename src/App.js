import classes from "./App.module.css";
import "antd/dist/antd.css";
import TaskInput from "./TaskInput";
import Title from "antd/lib/typography/Title";
import TodoList from "./TodoList";
import React, { useState } from "react";
import MockTask from "./MockTasks";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const ImportantContext = React.createContext();

export { ImportantContext };
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

  const partitions = _.partition(taskList, (task) => task.isCompleted);

  const tasksCompleted = _.orderBy(partitions[0], ["createdDate"], ["desc"]);

  const tasksImportant = _.partition(partitions[1], (task) => task.isImportant);

  const tasksImportantOrder = _.orderBy(tasksImportant[0], ["importantTime"]);
  console.log("taskOrder", tasksImportantOrder);

  const tasksNotCompleted = _.concat(
    tasksImportantOrder,
    _.orderBy(tasksImportant[1], ["completedDate"], ["desc"])
  );
  const handleAddTask = (newTaskName) => {
    setTaskList([
      ...taskList,
      {
        taskName: newTaskName,
        id: uuidv4(),
        isCompleted: false,
        createdDate: new Date(),
        isImportant: false,
        importantTime: 1,
      },
    ]);
  };
  const conText = {
    handleImportantTask: (id, toggleImportant) => {
      const newTasklist = taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              isImportant: toggleImportant ? false : true,
              importantTime: toggleImportant ? 1 : new Date().getTime(),
            }
          : task
      );
      setTaskList(newTasklist);
    },
  };

  return (
    <ImportantContext.Provider value={conText}>
      <div className={classes.app}>
        <Title className={classes.header}>Todo app</Title>
        <div className={classes.taskInputContainer}>
          <TaskInput handleAddTask={handleAddTask} />
        </div>
        <section className={classes.taskListContainer}>
          <TodoList
            changeStatus={changeStatus}
            taskList={tasksNotCompleted}
            title={"Danh sách task"}
          />

          <TodoList
            changeStatus={changeStatus}
            taskList={tasksCompleted}
            title={"Danh sách task hoàn thành"}
          />
        </section>
      </div>
    </ImportantContext.Provider>
  );
}

export default App;
