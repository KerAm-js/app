import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../../types/Comment";
import { USER } from "../../../consts/devData";

const initialState: Array<IComment> = [
  {
    id: "1",
    addresseeId: "1",
    addresseeName: "ДунСтрой Групп",
    authorId: "3",
    authorName: "User 2",
    text: "Comments are good",
    rate: 5,
  },
  {
    id: "2",
    addresseeId: "1",
    addresseeName: "ДунСтрой Групп",
    authorId: "2",
    authorName: "User 1",
    text: "Comment",
    rate: 4,
  },
  {
    id: "3",
    addresseeId: "2",
    addresseeName: "User 1",
    authorId: "3",
    authorName: "User 2",
    text: "Comment",
    rate: 4,
  },
  {
    id: "4",
    addresseeId: "2",
    addresseeName: "User 1",
    authorId: "1",
    authorName: "ДунСтрой Групп",
    text: "Comment",
    rate: 5,
  },
];

export const commemtsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.push({
        id: String(state.length + 1),
        rate: action.payload.rate,
        text: action.payload.text,
        addresseeId: action.payload.addresseeId,
        addresseeName: action.payload.addresseeName,
        authorId: USER.id,
        authorName: USER.username,
      });
    },
    editComment: (state, action) => {
      return state.map((comment) =>
        comment.id === action.payload.id
          ? { ...comment, text: action.payload.text, rate: action.payload.rate }
          : comment
      );
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
  },
});
