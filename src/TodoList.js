import { Checkbox } from "antd";
import Title from "antd/lib/typography/Title";
import classes from "./TodoList.module.css";

function TodoList() {
  return (
    <div className={classes.todoListContainer}>
      <Title level={3}>Danh sách task</Title>
      <div className={classes.todoContainer}>
        <Checkbox>Làm bài tập</Checkbox>
      </div>
      <div className={classes.todoContainer}>
        <Checkbox>Làm bài tập</Checkbox>
      </div>
      <div className={classes.todoContainer}>
        <Checkbox>Làm bài tập</Checkbox>
      </div>
    </div>
  );
}

export default TodoList;
