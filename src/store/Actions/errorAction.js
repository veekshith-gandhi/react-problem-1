/** @format */

import ActionType from "../../constants/actionType";

export const error = { type: ActionType.ERROR };

export const dispatchError = (error) => (dispatch) => {
  dispatch({
    type: ActionType.ERROR,
    payload: error,
  });
};
