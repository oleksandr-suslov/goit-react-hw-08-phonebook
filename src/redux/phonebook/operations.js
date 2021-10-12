import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  addContactRequest,
  deleteContactRequest,
} from "../../services/api-request";

const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async function (_, { rejectWithValue }) {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addContacts = createAsyncThunk(
  "contact/add",
  async function (newObject, { rejectWithValue }) {
    try {
      const contacts = await addContactRequest(newObject);
      return contacts;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const removeContact = createAsyncThunk(
  "contact/delete",
  async function (id, { rejectWithValue }) {
    try {
      return await deleteContactRequest(id);
    } catch (error) {
      console.error(error.message);
      // console.log(error.data);
      return rejectWithValue(error.message);
    }
  }
);
export { fetchContacts, addContacts, removeContact };
