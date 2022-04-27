/** @format */

import axios from "axios";
import { dispatchError } from "./errorAction";
import { dispatchLoading } from "./loadingAction";

export const addCountry = (payload) => async (dispatch) => {
  try {
    dispatchLoading(true)(dispatch);
    await axios.post("http://localhost:8080/countries", payload);
    dispatchLoading(false)(dispatch);
  } catch (error) {
    dispatchError(error)(dispatch);
    dispatchLoading(false)(dispatch);
  }
};
