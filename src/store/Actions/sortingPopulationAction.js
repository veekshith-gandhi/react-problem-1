/** @format */

import axios from "axios";
import ActionType from "../../constants/actionType";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const sortingPopulationAsc = () => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);
    const { data } = await axios.get(
      "http://localhost:8080/cities?_sort=population&_order=asc"
    );
    dispatch({
      type: ActionType.ASCENDING,
      payload: data,
    });
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};

export const sortingPopulationDesc = () => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);
    const { data } = await axios.get(
      "http://localhost:8080/cities?_sort=population&_order=desc"
    );
    dispatch({
      type: ActionType.DESCENDING,
      payload: data,
    });
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
