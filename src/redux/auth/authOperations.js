import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerNewUser,
  loginUser,
  logOutUser,
} from "../../services/api-request";

const register = createAsyncThunk(
  "auth/register",
  async function (newUser, { rejectWithValue }) {
    try {
      const user = await registerNewUser(newUser);
      // console.log("newUser", newUser);
      // console.log("user", user);
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
      // console.log("newUser", data);
      // console.log("user", user);
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

// const removeContact = createAsyncThunk(
//   "contact/delete",
//   async function (id, { rejectWithValue }) {
//     try {
//       return await deleteContactRequest(id);
//     } catch (error) {
//       console.error(error.message);
//       // console.log(error.data);
//       return rejectWithValue(error.message);
//     }
//   }
// );
export { register, logIn, logOut };
