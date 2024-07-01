import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import {
  IError,
  IGetUserByTokenResponse,
  ILogInRequest,
  ILogInResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../api/types";
import { getErrorMessage } from "../helpers/getErrorMessage";
import * as SecureStore from "expo-secure-store";
import { TOKEN } from "../consts";
import { IUser } from "../../../types/User";

const getUserByToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN, token);
  const userRes = await authApi.getUserByToken(token);
  const likesRes = await authApi.getUserLikesByToken(token);
  const commentsRes = await authApi.getUserCommentsByToken(token);
  return {
    ...userRes.data,
    comments: commentsRes.data,
    likes: likesRes.data,
  };
};

export const logInThunk = createAsyncThunk<
  {
    token: string;
    user: IUser;
  },
  ILogInRequest,
  { rejectValue: IError }
>("auth/login", async (credentials: ILogInRequest, thunkApi) => {
  try {
    const tokenRes = await authApi.logIn(credentials);
    const { token } = tokenRes.data;
    if (token) {
      const user = await getUserByToken(token);
      return { user, token };
    }
    return thunkApi.rejectWithValue(getErrorMessage(""));
  } catch (err) {
    return thunkApi.rejectWithValue(getErrorMessage(err));
  }
});

export const registerThunk = createAsyncThunk<
  IRegisterResponse & { token: string },
  IRegisterRequest,
  { rejectValue: IError }
>("auth/register", async (user, thunkApi) => {
  try {
    const response = await authApi.register(user);
    const responseToken = await authApi.logIn({
      email: response.data.email,
      password: user.password,
    });
    await SecureStore.setItemAsync(TOKEN, responseToken.data.token);
    return { ...response.data, token: responseToken.data.token };
  } catch (err) {
    return thunkApi.rejectWithValue(getErrorMessage(err));
  }
});

export const autoLoginThunk = createAsyncThunk<
  {
    token: string;
    user: IUser;
  },
  undefined,
  { rejectValue: IError }
>("auth/autologin", async (_, thunkApi) => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN);
    if (token) {
      const user = await getUserByToken(token);
      return { user, token };
    }
    return thunkApi.rejectWithValue(getErrorMessage(""));
  } catch (error) {
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }
});

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await SecureStore.setItemAsync(TOKEN, "");
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(""));
    }
  }
);
