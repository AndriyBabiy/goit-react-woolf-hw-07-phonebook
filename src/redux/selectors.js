import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const contact_list = [...contacts];
    if (filter) {
      return contact_list.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contact_list;
  }
);
