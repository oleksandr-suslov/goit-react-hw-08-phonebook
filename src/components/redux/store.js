import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./reducer";

const store = createStore(contactsReduser, composeWithDevTools());

export default store;
