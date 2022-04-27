/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import getDetailsReducer from "./getDetailReducer";

const rootReducer = combineReducers({
  detail: getDetailsReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
