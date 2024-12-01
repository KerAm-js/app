import { api } from "../../../api/api";
import { IUser } from "../../../types/User";

interface GetUserByIdRequest {
  id: number;
}

interface GetUserByIdResponse
  extends Pick<
    IUser,
    | "id"
    | "username"
    | "phone"
    | "email"
    | "description"
    | "rating"
    | "ratesCount"
  > {}

interface GetUsersRequest {
  username: string;
  from: number;
  to: number;
}

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<Array<GetUserByIdResponse>, GetUsersRequest>({
      query: ({ username, from, to }) =>
        `/users/find-by-name/?username=${username}&from=${from}&to=${to}`,
      providesTags: ["User"],
    }),
    getUserById: builder.query<GetUserByIdResponse, GetUserByIdRequest>({
      query: ({ id }) => `/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUsersQuery } = usersApi;
