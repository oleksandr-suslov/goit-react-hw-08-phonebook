import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { register, logIn, logOut } from "./authOperations";

const registerNewUser = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => null,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const error = createReducer(null, {
  [register.rejected]: (_, { payload }) => payload,
  [register.pending]: () => null,
  [logIn.rejected]: (_, { payload }) => payload,
  [logIn.pending]: () => null,
  [logOut.rejected]: (_, action) => action.payload,
  [logOut.pending]: () => null,
});

const isLoggedIn = createReducer(false, {
  [register.fulfilled]: () => true,
  [logIn.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
});

export default combineReducers({
  user: registerNewUser,
  token,
  error,
  isLoggedIn,
});
