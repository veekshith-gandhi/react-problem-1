/** @format */

import axios from "axios";
import ActionType from "../../constants/actionType";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const filterCountry = (payload) => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);

    const { data } = await axios.get(
      `http://localhost:8080/cities?country=${payload}`
    );
    console.log(data);
    if (data.length >= 1) {
      dispatch({
        type: ActionType.FILTERNAME,
        payload: data,
      });
    }
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
