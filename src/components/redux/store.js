import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./reducer";

// const store = createStore(contactsReduser, composeWithDevTools());
const store = configureStore({ reducer: contactsReduser });
export default store;
