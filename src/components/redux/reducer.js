import { ADD, DELETE } from "./types";

const initialState = {
  contacts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const dublicateName = state.contacts.some(
        (cont) => cont.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (dublicateName) {
        return {
          contacts: [...state.contacts],
          error: `${action.payload.name} is already in contacts`,
        };
      } else {
        return { contacts: [...state.contacts, action.payload] };
      }

    case DELETE:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
