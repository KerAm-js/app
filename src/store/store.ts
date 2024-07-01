import { configureStore } from "@reduxjs/toolkit";
import { advertsSlice } from "../modules/Adverts/store/advertsSlice";
import { usersSlice } from "../modules/SearchUsers/store/usersSlice";
import { commemtsSlice } from "../modules/Comments/store/commentsSlice";
import { filterSlice } from "../modules/FilterAdverts/store/filterSlice";
import { authSlice } from "../modules/Auth/store/authSlice";
import { api } from "../api/api";

export const store = configureStore({
  reducer: {
    adverts: advertsSlice.reducer,
    users: usersSlice.reducer,
    comments: commemtsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
