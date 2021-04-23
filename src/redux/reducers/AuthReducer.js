import { LoginSucces, LogoutSucces } from "../ActionType";

export const auth = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LoginSucces: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LogoutSucces: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
