import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../modules/SearchUsers/store/usersSlice";
import { filterSlice } from "../modules/FilterAdverts/store/filterSlice";
import { authSlice } from "../modules/Auth/store/authSlice";
import { api } from "../api/api";
import { addressByMapSlice } from "../modules/ChooseAddressMap/store/addressByMapSlice";
import { likesSlice } from "../modules/Like/store/likesSlice";

export const store = configureStore({
  reducer: {
    likes: likesSlice.reducer,
    users: usersSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
    addressByMap: addressByMapSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
