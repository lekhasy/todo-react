import { AttemptLoginSuccess, AttemptLogout } from "../ActionType";

export const auth = (
  state = { isLoggedIn: localStorage.getItem("isLoggedIn") },
  action
) => {
  switch (action.type) {
    case AttemptLoginSuccess: {
      localStorage.setItem("isLoggedIn", true);
      return { ...state, isLoggedIn: true };
    }
    case AttemptLogout: {
      localStorage.setItem("isLoggedIn", false);
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
};
