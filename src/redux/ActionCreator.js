export const ChangeInputValue = (newInputValue) => {
  return {
    type: "Change_Input_Value",
    payload: {
      newInputValue,
    },
  };
};
