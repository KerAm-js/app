import { SerializedError } from "@reduxjs/toolkit";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export const API_URL = "http://188.0.167.98:9636/demo";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Users", "Adverts", "Comments", "Images", "Likes"],
  endpoints: () => ({}),
});
