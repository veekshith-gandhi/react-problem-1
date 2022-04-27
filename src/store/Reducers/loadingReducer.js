/** @format */

import ActionType from "../../constants/actionType";

/** @format */
const initalState = {
  loading: false,
};

const loadingReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default loadingReducer;
