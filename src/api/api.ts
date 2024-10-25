import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = "http://188.0.167.98:9636/demo";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [
    "Users",
    "User",
    "TechnicAdverts",
    "DumpAdverts",
    "MaterialAdverts",
    "Comments",
    "Images",
    "Likes",
  ],
  endpoints: (builder) => ({
    isEmailAvailable: builder.query({
      query: (email: string) => `/user/email/isavailable/${email}`,
    }),
    isUsernameAvailable: builder.query({
      query: (username: string) => `/user/username/isavailable/${username}`,
    }),
  }),
});

export const { useIsUsernameAvailableQuery, useIsEmailAvailableQuery } = api;
