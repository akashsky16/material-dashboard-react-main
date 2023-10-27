import * as Actions from "./action";

export const Test = (state = {}, action) => {
  switch (action.type) {
    case Actions.TEST_ACTION:
      return {
        ...state,
        test: action.data,
      };
    default:
      return { ...state };
  }
};
