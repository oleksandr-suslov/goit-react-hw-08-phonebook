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

const filter = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  filter,
});
