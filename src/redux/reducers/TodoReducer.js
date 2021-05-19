import {
  ChangeInputValueType,
  ChangeStatusCompleteValue,
  ChooseFavouriteTaskValue,
  BeginAddTodo,
  AddTodoSuccess,
  GetTodos,
} from "../ActionType";
import { v4 as uuidv4 } from "uuid";
import MockTask from "../../MockTasks";

export const todo = (
  state = {
    taskList: [...MockTask],
    newTaskName: "",
    isLoading: true,
    isError: false,
  },
  action
) => {
  switch (action.type) {
    case BeginAddTodo: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case AddTodoSuccess: {
      const newTask = {
        id: uuidv4(),
        taskName: action.payload.newTaskName,
        isCompleted: false,
        isFavourite: false,
        createdDate: new Date(),
        completedDate: "",
      };
      return {
        ...state,
        isLoading: false,
        isError: false,
        newTaskName: "",
        taskList: [...state.taskList, newTask],
      };
    }
    case ChangeInputValueType: {
      return { ...state, newTaskName: action.payload.newInputValue };
    }
    case ChangeStatusCompleteValue: {
      const newTaskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

      return { ...state, taskList: newTaskList };
    }
    case ChooseFavouriteTaskValue: {
      const newTaskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isFavourite: !task.isFavourite }
          : task
      );

      return { ...state, taskList: newTaskList };
    }

    //Get API
    case GetTodos:
      return {
        ...state,
        taskList: action.payload
      }

    default:
      return state;
  }
};
