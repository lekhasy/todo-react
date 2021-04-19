import Title from "antd/lib/typography/Title";

import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const taskList = props.taskList;
  const onCompletionStageChanged = (id, value) => {
    props.changeStatus(id, value);
  };
  const onChooseFavouriteTask = (id, value) => {
    props.chooseFav(id, value);
  };
  return (
    <div>
      <Title level={3}>{props.title}</Title>
      <div className={classes.todoListContainer}>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            taskItem={task}
            onChooseFavouriteTask={onChooseFavouriteTask}
            onCompletionStageChanged={onCompletionStageChanged}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
