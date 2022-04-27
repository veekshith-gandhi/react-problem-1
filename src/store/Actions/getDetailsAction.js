/** @format */

import axios from "axios";
import ActionType from "../../constants/actionType";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const getData = () => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);
    const { data } = await axios("http://localhost:8080/cities");
    dispatch({
      type: ActionType.GETDATA,
      payload: data,
    });
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
