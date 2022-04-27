/** @format */

import ActionType from "../../constants/actionType";

/** @format */
const initalState = {
  error: null,
};

const errorReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.ERROR:
      return { error: action.payload };

    default:
      return state;
  }
};

export default errorReducer;
