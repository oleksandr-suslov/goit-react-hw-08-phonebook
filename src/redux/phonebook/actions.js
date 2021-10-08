import { createAction } from "@reduxjs/toolkit";

// const addNewContact = createAction("contact/Add");
// const removeContact = createAction("contact/Delete");
const filterContact = createAction("contact/Filter");
export { filterContact };
