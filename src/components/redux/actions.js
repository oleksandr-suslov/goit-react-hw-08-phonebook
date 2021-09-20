import { ADD, DELETE, FILTER } from "./types";

const addNewContact = ({ name, number, id }) => ({
  type: ADD,
  payload: { name, number, id },
});

const removeContact = (id) => ({
  type: DELETE,
  payload: { id },
});

const filterContact = (name) => ({
  type: FILTER,
  payload: { name },
});

export { addNewContact, removeContact, filterContact };
