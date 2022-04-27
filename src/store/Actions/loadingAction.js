/** @format */

import ActionType from "../../constants/actionType";

export const loading = { type: ActionType.LOADING };

export const dispatchLoading = (payload) => (dispatch) => {
  dispatch({
    type: ActionType.LOADING,
    payload,
  });
};
