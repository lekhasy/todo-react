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
  const createDate = new Date();
  return axios.post(apiEndPoint + "/Todo/AddTodo", {
    user: UserServcie.GetUserName(),
    taskName: inputValue,
    createdDate: createDate,
  });
};

const ChooseFavorite = (id, value) => {
  return axios.post(apiEndPoint + "/Todo/ChangeTaskFavoriteState", {
    taskId: id,
    isFavorite: value,
  });
};

const ChangeStatusComplete = (id, value) => {
  return axios.post(apiEndPoint + "/Todo/ChangeTaskCompletedState", {
    taskId: id,
    isCompleted: value,
  });
};

const TodoService = {
  GetTodoList,
  AddTodo,
  ChooseFavorite,
  ChangeStatusComplete,
};

export default TodoService;
