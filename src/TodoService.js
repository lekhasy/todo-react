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

const ChooseFavourite = (id, value) => {
  return axios.patch(apiEndPoint + "todo/" + id,
  {
    isFavourite: value   

  },
  )
};

const ChangeStatusComplete = (id, value) => {
  return axios.patch(apiEndPoint + "todo/" + id,
  {
    isCompleted: value   

  },
  )
};

const TodoService = {
  GetTodoList,
  AddTodo,
  ChooseFavourite,
  ChangeStatusComplete
};


export default TodoService;
