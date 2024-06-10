import { Token } from "./../../../../node_modules/acorn/dist/acorn.d";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import {
  IError,
  ILogInRequest,
  ILogInResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../api/types";
import { getErrorMessage } from "../helpers/getErrorMessage";

export const logInThunk = createAsyncThunk<
  ILogInResponse,
  ILogInRequest,
  { rejectValue: IError }
>("auth/login", async (credentials: ILogInRequest, thunkApi) => {
  try {
    const response = await authApi.logIn(credentials);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(getErrorMessage(err));
  }
});

export const registerThunk = createAsyncThunk<
  IRegisterResponse & {token: string},
  IRegisterRequest,
  { rejectValue: IError }
>("auth/register", async (user, thunkApi) => {
  try {
    const response = await authApi.register(user);
    const responseToken = await authApi.logIn({
      email: response.data.email,
      password: user.password,
    });
    return { ...response.data, token: responseToken.data.token };
  } catch (err) {
    return thunkApi.rejectWithValue(getErrorMessage(err));
  }
});
