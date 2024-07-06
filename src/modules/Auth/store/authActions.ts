import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import {
  IGetUserByTokenResponse,
  ILogInRequest,
  IRegisterRequest,
  IRegisterResponse,
} from "../api/types";
import { handleError } from "../helpers/getErrorMessage";
import * as SecureStore from "expo-secure-store";
import { TOKEN } from "../consts";
import { IUser } from "../../../types/User";

const getUserByToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN, token);
  const userRes = await authApi.getUserByToken(token);
  // const likesRes = await authApi.getUserLikesByToken(token);
  // const commentsRes = await authApi.getUserCommentsByToken(token);
  return {
    ...userRes.data,
    likes: [],
    comments: [],
    adverts: [],
  };
};

export const getCurrentUserThunk = createAsyncThunk<
  IGetUserByTokenResponse,
  string,
  { rejectValue: string }
>("auth/current-user", async (credentials, thunkApi) => {
  try {
    const response = await authApi.getUserByToken(credentials);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(handleError(err));
  }
});

export const logInThunk = createAsyncThunk<
  {
    token: string;
    user: IUser;
  },
  ILogInRequest,
  { rejectValue: string }
>("auth/login", async (credentials, thunkApi) => {
  try {
    const tokenRes = await authApi.logIn(credentials);
    const { token } = tokenRes.data;
    if (token) {
      const user = await getUserByToken(token);
      return { user, token };
    }
    return thunkApi.rejectWithValue(handleError(""));
  } catch (err) {
    return thunkApi.rejectWithValue(handleError(err));
  }
});

export const registerThunk = createAsyncThunk<
  IRegisterResponse & { token: string },
  IRegisterRequest,
  { rejectValue: string }
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
    return thunkApi.rejectWithValue(handleError(err));
  }
});

export const autoLoginThunk = createAsyncThunk<
  {
    token: string;
    user: IUser;
  },
  undefined,
  { rejectValue: string }
>("auth/autologin", async (_, thunkApi) => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN);
    if (token && token.length) {
      const user = await getUserByToken(token);
      return { user, token };
    }
    return thunkApi.rejectWithValue(handleError(""));
  } catch (error) {
    return thunkApi.rejectWithValue(handleError(error));
  }
});

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await SecureStore.setItemAsync(TOKEN, "");
    } catch (error) {
      return thunkApi.rejectWithValue(handleError(""));
    }
  }
);
