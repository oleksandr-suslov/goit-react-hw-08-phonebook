import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addNewContact, removeContact, filterContact } from "./actions";

const contacts = createReducer(
  [
    { name: "David", number: "3235-43-21", id: "12" },
    { name: "Rony", number: "3235-43-51", id: "13" },
    { name: "Bob", number: "3235-43-81", id: "14" },
    { name: "Ivan", number: "3235-43-91", id: "15" },
    { name: "Jhon", number: "3235-43-51", id: "16" },
    { name: "Clark", number: "3235-43-21", id: "17" },
  ],
  {
    [addNewContact]: (state, { payload }) => {
      const dublicateName = state.some(
        (cont) => cont.name.toLowerCase() === payload.name.toLowerCase()
      );

      if (dublicateName) {
        alert(`${[payload.name]} is already in contacts`);
        return state;
      } else {
        return [...state, payload];
      }
    },
    [removeContact]: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  }
);

const filter = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});
export default combineReducers({
  contacts,
  filter,
});
