import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "../modules/Adverts/store/advertsSlice";
import { usersReducer } from "../modules/SearchUsers/store/usersSlice";
import { commentsReducer } from "../modules/Comments/store/commentsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    users: usersReducer,
    comments: commentsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
