import { Checkbox } from "antd";
import Title from "antd/lib/typography/Title";
import TaskItem from "./TaskItem";
import classes from "./TodoList.module.css";

function TodoList(props) {

  const taskList = props.taskList
  const onCompletionStageChanged = (id, value) => {
    props.changeStatus(id, value);
  }
  return (
    <div className={classes.todoListContainer}>
      <Title level={3}>Danh sách task</Title>
      {taskList.map(task => (

        <TaskItem item={task} onCompletionStageChanged={onCompletionStageChanged} />

      ))}

    </div>
  );
}

export default TodoList;
