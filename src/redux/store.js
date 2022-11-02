// import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
// import { tasksSlice } from "./contactsSlice";

// export const store = configureStore({
//     reduser: {},
// });

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      contacts:contactsReducer,
  },
});