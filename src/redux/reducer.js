import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterContact } from "./actions";
import { fetchContacts, addContacts, removeContact } from "./operations";

const getContacts = createReducer([], {
  // [fetchContacts.fulfilled]: (_, action) => action.payload,
  [fetchContacts.fulfilled]: (state, action) => [
    ...state.contacts,
    ...action.payload,
  ],
  //   console.log(action.payload);
  //   console.log(state);
  // },

  [addContacts.fulfilled]: (state, action) => {
    const dublicateName = state.some(
      (cont) => cont.name.toLowerCase() === action.payload.name.toLowerCase()
    );

    if (dublicateName) {
      alert(`${[action.payload.name]} is already in contacts`);
      return state;
    } else {
      return [...state, action.payload];
    }
  },

  [removeContact.fulfilled]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (state, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (state, action) => action.payload,
  [addContacts.pending]: () => null,
  [removeContact.rejected]: (state, action) => action.payload,
  [removeContact.pending]: () => null,
});

const filter = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  error,
  filter,
});
