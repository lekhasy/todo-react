import axios from "axios";
import UserServcie from "./UserService";

const apiEndPoint = "https://linhtrinhviet.herokuapp.com/";

const GetTodoList = () => {
  return axios.get(apiEndPoint + "todo");
};

const AddTodo = (inputValue) => {
  const createDate = new Date();
  return axios.post(apiEndPoint + "todo", {
    taskName: inputValue,
    isCompleted: false,
    isFavourite: false,
    createdDate: createDate,
    completedDate: ""
  });
};

const TodoService = {
  GetTodoList,
  AddTodo,
};

export default TodoService;
