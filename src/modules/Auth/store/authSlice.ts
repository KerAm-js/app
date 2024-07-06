import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/User";
import {
  autoLoginThunk,
  getCurrentUserThunk,
  logInThunk,
  logoutThunk,
  registerThunk,
} from "./authActions";

const initialState: {
  token?: string;
  isLoading: boolean;
  autoAuthPending: boolean;
  error?: string;
  user?: IUser;
} = {
  token: undefined,
  user: undefined,
  autoAuthPending: true,
  isLoading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserThunk.pending, (state) => {
      state.isLoading = true;
      state.autoAuthPending = false;
      state.error = undefined;
    });
    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.user = {...action.payload, likes: [], comments: [], adverts: []};
    });
    builder.addCase(getCurrentUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(logInThunk.pending, (state) => {
      state.isLoading = true;
      state.autoAuthPending = false;
      state.error = undefined;
    });
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.isLoading = false;
      state.error = undefined;
      state.token = token;
      state.user = { ...user };
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true;
      state.autoAuthPending = false;
      state.error = undefined;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      const { token, ...payload } = action.payload;
      state.isLoading = false;
      state.error = undefined;
      state.user = {
        ...payload,
        description: " ",
        likes: [],
        comments: [],
        adverts: [],
        rating: 0,
        ratesCount: 0,
        avatar: undefined,
      };
      state.token = token;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(autoLoginThunk.pending, (state) => {
      state.autoAuthPending = true;
      state.error = undefined;
    });
    builder.addCase(autoLoginThunk.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.autoAuthPending = false;
      state.error = undefined;
      state.user = { ...user };
      state.token = token;
    });
    builder.addCase(autoLoginThunk.rejected, (state, action) => {
      state.autoAuthPending = false;
      state.token = undefined;
      state.user = undefined;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.token = undefined;
      state.isLoading = false;
      state.error = undefined;
      state.user = undefined;
    });
  },
});
