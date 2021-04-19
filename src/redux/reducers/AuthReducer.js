import { ChangeStatusLogInValue } from "../ActionType";

export const auth = (state = { isLoggedIn: true }, action) => {
  switch (action.type) {
    case ChangeStatusLogInValue:
      return { ...state, isLoggedIn: action.payload.value };
    default:
      return state;
  }
};
