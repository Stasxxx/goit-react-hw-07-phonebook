import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
// import { tasksSlice } from "./contactsSlice";

// export const store = configureStore({
//     reduser: {},
// });



export const store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});