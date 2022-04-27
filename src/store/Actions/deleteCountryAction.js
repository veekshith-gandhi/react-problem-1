/** @format */

import axios from "axios";
import ActionType from "../../constants/actionType";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const deleteCountryAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/cities/${id}`);
    dispatch({
      type: ActionType.DELETECOUNTRY,
      payload: id,
    });
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
