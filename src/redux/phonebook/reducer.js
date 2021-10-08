import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterContact } from "./actions";
import { fetchContacts, addContacts, removeContact } from "./operations";

const getContacts = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,

  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [removeContact.fulfilled]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (state, action) =>
    action.error.message ?? action.error,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (state, action) =>
    action.error.message ?? action.error,
  [addContacts.pending]: () => null,
  [removeContact.rejected]: (state, action) =>
    action.error.message ?? action.error,
  [removeContact.pending]: () => null,
});

const filter = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  error,
  filter,
});
