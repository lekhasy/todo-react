import Title from "antd/lib/typography/Title";
import { useDispatch } from "react-redux";
import {
  ChangeStatusComplete,
  ChooseFavouriteTask,
} from "./redux/ActionCreator";

import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const taskList = props.taskList;

  const dispatch = useDispatch();

  const onCompletionStageChanged = (id, value) => {
    dispatch(ChangeStatusComplete(id, value));
  };

  const onChooseFavouriteTask = (id, value) => {
    dispatch(ChooseFavouriteTask(id, value));
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
