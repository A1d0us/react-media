import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice.js";
import {albumsApi} from "./apis/albumsApi.js";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(albumsApi.middleware),
});

setupListeners(store.dispatch);

export * from  './thunks/fetchUsers.js';
export * from  './thunks/addUser.js';
export * from  './thunks/removeUser.js';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} from './apis/albumsApi.js';