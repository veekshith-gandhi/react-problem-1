/** @format */

import axios from "axios";
import ActionType from "../../constants/actionType";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const editAction = (id, payload) => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);
    const { data } = await axios.patch(
      `http://localhost:8080/cities/${id}`,
      payload
    );

    dispatch({
      type: ActionType.EDITDETAILS,
      payload: data,
    });
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
