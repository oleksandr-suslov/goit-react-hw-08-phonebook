import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contacts;
const getFilter = (state) => state.contacts.filter;

export const getContactsByFilter = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
