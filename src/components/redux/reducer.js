import { ADD, DELETE, FILTER } from "./types";

const initialState = {
  contacts: [
    { name: "David", number: "3235-43-21", id: "12" },
    { name: "Rony", number: "3235-43-51", id: "13" },
    { name: "Bob", number: "3235-43-81", id: "14" },
    { name: "Ivan", number: "3235-43-91", id: "15" },
    { name: "Jhon", number: "3235-43-51", id: "16" },
    { name: "Clark", number: "3235-43-21", id: "17" },
  ],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const dublicateName = state.contacts.some(
        (cont) => cont.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (dublicateName) {
        alert(`${action.payload.name} is already in contacts`);
        return state;
      } else {
        return { contacts: [...state.contacts, action.payload] };
      }

    case DELETE:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };

    case FILTER:
      return { contacts: state.contacts, filter: action.payload.name };

    default:
      return state;
  }
};

export default reducer;
