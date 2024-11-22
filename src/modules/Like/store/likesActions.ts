import { createAsyncThunk } from "@reduxjs/toolkit";
import { likesApi } from "../api/likesApi";
import * as SecureStore from "expo-secure-store";
import { IUser } from "../../../types/User";
import { TOKEN } from "../consts";
import { handleError } from "../../Auth/helpers/getErrorMessage";


export const addLikeThunk = createAsyncThunk("likes/addLike", async (credentials, thunkApi) => {
  try {
    console.log("ADD LIKE")
    const token = await SecureStore.getItemAsync(TOKEN);
    if (token && token.length) {
        const response = await likesApi.addLike(credentials, token);
        return credentials;
      } else {
        return thunkApi.rejectWithValue("");
      }
    
   
  } catch (err) {
    return thunkApi.rejectWithValue(handleError(err));
  }
});

export const deleteLikeThunk = createAsyncThunk("likes/deleteLike", async (credentials, thunkApi) => {
    try {
    console.log("DELETE LIKE", credentials.id)

        const token = await SecureStore.getItemAsync(TOKEN);
    if (token && token.length) {
        const response = await likesApi.deleteLike(credentials.id, token);

        return credentials;
      } else {
        return thunkApi.rejectWithValue("");
      }
 
    } catch (err) {
      return thunkApi.rejectWithValue(handleError(err));
    }
  });

export const currentUserLikesThunk = createAsyncThunk("likes/currentUserLikes", async (_, thunkApi) => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN);
    if (token && token.length) {
      const response = await likesApi.currentUserLikes(token);
      return response.data;
    } else {
      return thunkApi.rejectWithValue("");
    }
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

