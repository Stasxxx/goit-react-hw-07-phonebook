import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    redusers: {
        filterContact(state, action) {
            state = action.payload;
        },
    }
});


export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// console.log(filterSlice.state)