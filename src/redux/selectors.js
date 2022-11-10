import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.list;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleFilter = createSelector(
    [selectContacts, selectFilter],
    (contacts, filteredContacts) => {
        const filteredName = filteredContacts.toLowerCase()
        return contacts.filter(contact => contact.name.toLowerCase().includes(filteredName));
    }
);

