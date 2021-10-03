import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./reducer";

const store = configureStore({
  reducer: contactsReduser,
});

export { store };
