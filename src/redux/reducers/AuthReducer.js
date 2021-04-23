import { LoginSucces, LogoutSucces } from "../ActionType";

export const auth = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LoginSucces: {
      localStorage.setItem("isLoggIn", true);
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LogoutSucces: {
      localStorage.removeItem("isLoggIn");
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
