import Title from "antd/lib/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeStatusCompletedAsync,
  ChooseFavouriteTaskAsync,
  GetData,
} from "./redux/ActionCreator";

import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";
import { Spin, Button } from 'antd';


function TodoList(props) {
  const taskList = props.taskList;

  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.todoState.isLoading);

  const isError = useSelector(store => store.todoState.isError);

  const onCompletionStageChanged = (id, value) => {
    dispatch(ChangeStatusCompletedAsync(id, value));
  };

  const onChooseFavouriteTask = (id, value) => {
    dispatch(ChooseFavouriteTaskAsync(id, value));
  };

  return (
    <div>
      <Title level={3}>{props.title}</Title>
      {(props.title === "Danh sách task") && (isLoading && <Spin tip="Loading..."></Spin>)}
      {(props.title === "Danh sách task") && isError && <Button className={classes.btn} onClick={() => dispatch(GetData())}>Try again!</Button>}
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
