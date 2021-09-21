import { createAction } from "@reduxjs/toolkit";
// import { ADD, DELETE, FILTER } from "./types";

// const addNewContact = ({ name, number, id }) => ({
//   type: ADD,
//   payload: { name, number, id },
// });

// const removeContact = (id) => ({
//   type: DELETE,
//   payload: { id },
// });

// const filterContact = (name) => ({
//   type: FILTER,
//   payload: { name },
// });
const addNewContact = createAction("contact/Add");
const removeContact = createAction("contact/Delete");
const filterContact = createAction("contact/Filter");
export { addNewContact, removeContact, filterContact };
