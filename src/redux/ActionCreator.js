import {
  AddNewTaskValue,
  ChangeInputValueType,
  GetTasksListValue,
  ChangeStatusCompleteValue,
  ChooseFavouriteTaskValue,
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
export const AddNewTask = (newTaskName) => {
  return {
    type: AddNewTaskValue,
    payload: {
      newTaskName,
    },
  };
};

export const ChangeStatusComplete = (id, value) => {
  return {
    type: ChangeStatusCompleteValue,
    payload: {
      id,
      value,
    },
  };
};

export const ChooseFavouriteTask = (id, value) => {
  return {
    type: ChooseFavouriteTaskValue,
    payload: {
      id,
      value,
    },
  };
};

export const AttempLogin = (isLogedin) => {
  return {
    type: "Login_Succsess",
    payload: {
      isLogedin,
    },
  };
};

export const AttempLogout = (isLogedin) => {
  return {
    type: "Logout_Succsess",
    payload: {
      isLogedin,
    },
  };
};
