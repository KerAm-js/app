import { api } from "../../../api/api";
import { IUser } from "../../../types/User";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<
      Array<
        Pick<
          IUser,
          | "id"
          | "username"
          | "phone"
          | "email"
          | "description"
          | "rating"
          | "ratesCount"
        >
      >,
      { username: string; from: number; to: number }
    >({
      query: ({ username, from, to }) =>
        `/users/${username}?from=${from}&to=${to}`,
      providesTags: () => [
        {
          type: "Users",
        },
      ],
    }),
    getUserById: builder.query<
      Pick<
        IUser,
        | "id"
        | "username"
        | "phone"
        | "email"
        | "description"
        | "rating"
        | "ratesCount"
      >,
      string
    >({
      query: (userId) => `/user/${userId}`,
      providesTags: () => [
        {
          type: "Users",
        },
      ],
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUsersQuery } = usersApi;

// Usage example:
// const { isLoading: isCreatingUser, mutate: createUser } = useNewUserMutation();
// const { isLoading: isFetchingToken, mutate: getAdamToken } = useGetAdamTokenMutation();
// const { data: userById, isLoading: isFetchingUser } = useGetUserByIdQuery(2);
// const { isLoading: isFetchingAuthToken, mutate: getAuthToken } = useGetTokenMutation();
