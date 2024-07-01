import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/User";
import {
  autoLoginThunk,
  logInThunk,
  logoutThunk,
  registerThunk,
} from "./authActions";
import { IError } from "../api/types";
import { getErrorMessage } from "../helpers/getErrorMessage";

const initialState: {
  token?: string;
  isLoading: boolean;
  autoAuthPending: boolean;
  error?: IError;
  user?: IUser;
} = {
  token: undefined,
  user: undefined,
  autoAuthPending: false,
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
    builder.addCase(logInThunk.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.isLoading = false;
      state.error = undefined;
      state.token = action.payload.token;
      state.user = {...user};
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
    builder.addCase(autoLoginThunk.pending, (state) => {
      state.autoAuthPending = true;
      state.error = undefined;
    });
    builder.addCase(autoLoginThunk.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.autoAuthPending = false;
      state.error = undefined;
      state.user = {...user};
      state.token = token;
    });
    builder.addCase(autoLoginThunk.rejected, (state, action) => {
      const { title, message } = getErrorMessage("");
      state.autoAuthPending = false;
      state.error = {
        title: action.payload?.title || title,
        message: action.payload?.message || message,
      };
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.token = undefined;
      state.isLoading = false;
      state.error = undefined;
      state.user = undefined;
    });
  },
});
