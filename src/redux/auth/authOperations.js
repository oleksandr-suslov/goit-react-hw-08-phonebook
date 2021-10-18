import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerNewUser,
  loginUser,
  logOutUser,
  getCurrentUser,
} from "../../services/api-request";

const register = createAsyncThunk(
  "auth/register",
  async function (newUser, { rejectWithValue }) {
    try {
      const user = await registerNewUser(newUser);
      return user;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async function (data, { rejectWithValue }) {
    try {
      const user = await loginUser(data);
      return user;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const logOut = createAsyncThunk(
  "auth/logout",
  async function (_, { rejectWithValue }) {
    try {
      return await logOutUser();
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const getCurrent = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue();
      }
      return await getCurrentUser(token);
    } catch (error) {
      return error.message;
    }
  }
);

export { register, logIn, logOut, getCurrent };
