import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/User";

const initialState: Array<IUser> = [
  {
    id: "2",
    description: "",
    phone: "+7 928 123-45-67",
    username: "User 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    comments: [],
    adverts: [],
  },
  {
    id: "3",
    description: "",
    phone: "+7 928 123-45-68",
    username: "User 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "4",
    description: "",
    phone: "+7 928 223-45-69",
    username: "User 3",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "5",
    description: "",
    phone: "+7 928 323-45-67",
    username: "User 4",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "6",
    description: "",
    phone: "+7 963 123-45-67",
    username: "Usr 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "7",
    description: "",
    phone: "+7 933 123-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "8",
    description: "",
    phone: "+7 928 133-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "9",
    description: "",
    phone: "+7 928 133-45-68",
    username: "User 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "10",
    description: "",
    phone: "+7 928 233-45-69",
    username: "Use 0",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "11",
    description: "",
    phone: "+7 928 333-45-67",
    username: "User 4",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "12",
    description: "",
    phone: "+7 963 133-45-67",
    username: "Usr 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
  {
    id: "13",
    description: "",
    phone: "+7 933 133-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    likes: [],
    adverts: [],
    comments: [],
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
