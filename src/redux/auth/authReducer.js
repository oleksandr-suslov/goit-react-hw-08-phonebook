import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { register, logIn, logOut, getCurrent } from "./authOperations";

const registerNewUser = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => null,
  [getCurrent.fulfilled]: (_, { payload }) => payload.user,
  [getCurrent.fulfilled]: (_, { payload }) => payload,
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
  [getCurrent.rejected]: (_, action) => action.payload,
  [getCurrent.pending]: () => null,
});

const isLoggedIn = createReducer(false, {
  [register.fulfilled]: () => true,
  [logIn.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [getCurrent.fulfilled]: () => true,
});

const isUser = createReducer(false, {
  [getCurrent.fulfilled]: (state, _) => false,
  [getCurrent.rejected]: (state, _) => false,
  [getCurrent.pending]: (state, _) => true,
});

export default combineReducers({
  user: registerNewUser,
  token,
  error,
  isLoggedIn,
  isUser,
});
