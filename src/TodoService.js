import axios from "axios";
import UserServcie from "./UserService";

const apiEndPoint = "http://localhost:5000";

const GetTodoList = () => {
  return axios.get(apiEndPoint + "/Todo/GetTodos", {
    params: {
      user: UserServcie.GetUserName(),
    },
  });
};

const AddTodo = (inputValue) => {
  return axios.post(apiEndPoint + "/Todo/AddTodo", {
    user: UserServcie.GetUserName(),
    taskName: inputValue,
  });
};

const TodoService = {
  GetTodoList,
  AddTodo,
};

export default TodoService;
