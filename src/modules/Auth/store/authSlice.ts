import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/User";
import { logInThunk, registerThunk } from "./authActions";
import { IError } from "../api/types";
import { getErrorMessage } from "../helpers/getErrorMessage";

const initialState: {
  token?: string;
  isLoading: boolean;
  error?: IError;
  user?: IUser;
} = {
  token: undefined,
  user: undefined,
  isLoading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = undefined;
      state.error = undefined;
      state.user = undefined;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInThunk.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.token = action.payload.token;
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      const { title, message } = getErrorMessage("");
      state.isLoading = false;
      state.error = {
        title: action.payload?.title || title,
        message: action.payload?.message || message,
      };
    });
    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true;
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
      const { title, message } = getErrorMessage("");
      state.isLoading = false;
      state.error = {
        title: action.payload?.title || title,
        message: action.payload?.message || message,
      };
    });
  },
});
