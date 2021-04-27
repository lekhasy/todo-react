import axios from "axios";
import UserServcie from "./UserService";

const apiEndPoint = "https://linhtrinhviet.herokuapp.com/";

const GetTodoList = () => {
  return axios.get(apiEndPoint + "todo");
};

const AddTodo = (inputValue) => {
  return axios.post(apiEndPoint + "todo", {
    taskName: inputValue,
  });
};

const TodoService = {
  GetTodoList,
  AddTodo,
};

export default TodoService;
