import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 1, name: "Stas Kor", number: "253 253 452" },
    
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reduser(state, action) {
        //     // return [...state, action.payload];
                state.push(action.payload)
            },
            prepare(contact) {
                const { name, number } = contact;
                const id = nanoid() 
                return {
                    payload: {
                        id: id,
                        name: name,
                        number: number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// console.log(addContact.action.payload)