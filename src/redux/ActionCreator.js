import {
  AddNewTaskValue,
  ChangeInputValueType,
  GetTasksListValue,
  ChangeStatusCompleteValue,
  ChooseFavouriteTaskValue,
  LoginSucces,
  LogoutSucces,
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

export const AttempLogin = () => {
  return {
    type: LoginSucces
  };
};

export const AttempLogout = () => {
  return {
    type: LogoutSucces
  };
};
