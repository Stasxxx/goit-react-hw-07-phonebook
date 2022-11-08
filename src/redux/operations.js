import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://636a5478b10125b78fd7e328.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
    const response = await axios.get("/contacts");
    return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, phone}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name,phone });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    )