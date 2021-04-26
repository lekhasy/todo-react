import { LoginSucces, LogoutSucces } from "../ActionType";

export const auth = (state = { isLoggedIn: localStorage.getItem("isLoggedIn") }, action) => {
  switch (action.type) {
    case LoginSucces: {
      localStorage.setItem("isLoggedIn", true);
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LogoutSucces: {
      localStorage.removeItem("isLoggedIn");
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
