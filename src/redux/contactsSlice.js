import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operations";

const contactsInitialState = {
    list:[
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    // reducers: {
    //     addContact(state, action) {
    //         // return { list: [...state.list, action.payload] }
    //             state.list.push(action.payload)
    //         },
    //     deleteContact(state, action) {
    //         const index = state.list.findIndex(contact => contact.id === action.payload);
    //         state.list.splice(index, 1)
    //         // return state.list.filter(contact => contact.id !== action.payload);
    //     },
    // },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});


// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;