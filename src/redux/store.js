import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./phonebook/reducer";

const store = configureStore({
  reducer: contactsReduser,
});

export { store };
