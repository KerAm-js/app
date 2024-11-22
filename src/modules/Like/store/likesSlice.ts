import { createSlice } from "@reduxjs/toolkit";
import {
    addLikeThunk,
    deleteLikeThunk,
    currentUserLikesThunk
  } from "./likesActions";
  

const initialState: any = {
    likes: [],
    error: undefined,
    isLoading: false,

};

export const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(addLikeThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined
      })
      builder.addCase(addLikeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.likes = [...state.likes, action.payload]

      })
      builder.addCase(addLikeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload


      })
      builder.addCase(currentUserLikesThunk.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(currentUserLikesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.likes = action.payload
      })
      builder.addCase(currentUserLikesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
      builder.addCase(deleteLikeThunk.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(deleteLikeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
        state.likes = state.likes.filter(item => {
            return item.advertId === action.payload.advertId && item.advertType === action.payload.advertType ? null : item
        })
      })
      builder.addCase(deleteLikeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
    },
  });
  