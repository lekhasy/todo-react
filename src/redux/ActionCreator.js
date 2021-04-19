import { ChangeInputValueType } from "./ActionTypes";

export const ChangeInputValue = (newInputValue) => {
  return {
    type: ChangeInputValueType,
    payload: {
      newInputValue,
    },
  };
};
