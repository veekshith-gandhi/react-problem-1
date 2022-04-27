/** @format */

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./Reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});
export default store;
