import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterContact } from "./phonebookActions";
import {
  fetchContacts,
  addContacts,
  removeContact,
  updateContact,
} from "./phonebookOperations";

const getContacts = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [removeContact.fulfilled]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, action) => action.payload,
  [addContacts.pending]: () => null,
  [removeContact.rejected]: (_, action) => action.payload,
  [removeContact.pending]: () => null,
  [updateContact.rejected]: (_, action) => action.payload,
  [updateContact.pending]: () => null,
});

const filter = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  filter,
  error,
});
