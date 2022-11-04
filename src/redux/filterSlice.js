import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ""

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    redusers: {
        filterContacts(state, action) {
            state = action.payload;
        }
    }
});


export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
