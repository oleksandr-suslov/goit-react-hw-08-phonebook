import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  addContactRequest,
  deleteContactRequest,
} from "../services/api-request";

const fetchContacts = createAsyncThunk("contact/fetchContacts", async () => {
  const contacts = await getContacts();
  return contacts;
});

const addContacts = createAsyncThunk("contact/add", async (newObject) => {
  const contacts = await addContactRequest(newObject);
  return contacts;
});

const removeContact = createAsyncThunk("contact/delete", async (id) => {
  return await deleteContactRequest(id);
});
export { fetchContacts, addContacts, removeContact };
