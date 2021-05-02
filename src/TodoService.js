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
    taskName: inputValue,
    isCompleted: false,
    isFavourite: false,
    createdDate: createDate,
    completedDate: "",
  });
};

const ChooseFavourite = (id, value) => {
  return axios.post(apiEndPoint + "/Todo/ChangeTaskFavoriteState", {
    taskId: id,
    isFavourite: value,
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
  ChooseFavourite,
  ChangeStatusComplete,
};

export default TodoService;
