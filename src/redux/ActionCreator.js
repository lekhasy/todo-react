import axios from "axios";
import TodoService from "../TodoService";
import UserServcie from "../UserService";
import {
  ChangeInputValueType,
  GetTasksListValue,
  ChangeStatusCompleteValue,
  ChooseFavouriteTaskValue,
  LoginSucces,
  LogoutSucces,
  BeginAddTodo,
  AddTodoSuccess,
  GetTodos,
} from "./ActionType";

export const ChangeInputValue = (newInputValue) => {
  return {
    type: ChangeInputValueType,
    payload: {
      newInputValue,
    },
  };
};
export const GetTasksList = (tasksList) => {
  return {
    type: GetTasksListValue,
    payload: {
      tasksList,
    },
  };
};

export const AttempLogin = () => {
  return {
    type: LoginSucces,
  };
};

export const AttempLogout = () => {
  return {
    type: LogoutSucces,
  };
};

export const AddNewTaskAsync = (inputValue) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BeginAddTodo,
    });
    await TodoService.AddTodo(inputValue);
    dispatch({
      type: AddTodoSuccess,
      payload: {
        newTaskName: inputValue,
      },
    });
  } catch (ex) {
    // ADD_TODO_ERR
  } finally {
    // END_ADD_TODO
  }
};


export const GetTodosFromAPI = () => async dispatch => {
  try {
    const response = await axios.get("http://localhost:5000/Todo/GetTodos", {
      params: {
        user: UserServcie.GetUserName(),
      },
    });

    dispatch({
      type: GetTodos,
      payload: response.data.data
    })
  } catch (error) {
    console.log(error);
  }
}

export const ChooseFavouriteTask = (id, value) => async dispatch => {
  try {
    await axios.post("http://localhost:5000/Todo/ChangeTaskFavoriteState", {
      taskId: id,
      isFavorite: value,
    });
    dispatch({
      type: ChooseFavouriteTaskValue,
      payload: {
        id,
        value,
      },
    })
  } catch (error) {
    console.log(error);
  }
};

export const ChangeStatusComplete = (id, value) => async dispatch => {
  try {
    await axios.post("http://localhost:5000/Todo/ChangeTaskCompletedState", {
      taskId: id,
      isCompleted: value
    });
    dispatch({
      type: ChangeStatusCompleteValue,
      payload: {
        id,
        value,
      },
    })
  } catch (error) {
    console.log(error);
  }
};