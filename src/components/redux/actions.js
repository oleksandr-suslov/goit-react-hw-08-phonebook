import { ADD, DELETE } from "./types";

const addNewContact = ({ name, number, id }) => ({
  type: ADD,
  payload: { name, number, id },
});

const removeContact = (id) => ({
  type: DELETE,
  payload: { id },
});

export { addNewContact, removeContact };
