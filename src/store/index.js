import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export * from  './thunks/fetchUsers.js';
export * from  './thunks/addUser.js';
export * from  './thunks/removeUser.js';