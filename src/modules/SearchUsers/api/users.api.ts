import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface NewUserRequest {
  username: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}

interface NewUserResponse {
  id: number;
  username: string;
  phone: string;
  email: string;
}

interface TokenRequest {
  email: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8189' }),
  endpoints: (builder) => ({
    newUser: builder.mutation<NewUserResponse, NewUserRequest>({
      query: (userData) => ({
        url: '/demo/sign_up',
        method: 'POST',
        body: userData,
      }),
    }),
    getAdamToken: builder.mutation<TokenResponse, TokenRequest>({
      query: () => ({
        url: '/demo/auth',
        method: 'POST',
        body: {
          email: 'smgbysgm@gmail.com',
          password: '100',
        },
      }),
    }),
    getUserById: builder.query<void, number>({
      query: (userId) => `/demo/user/${userId}`,
    }),
    getToken: builder.mutation<TokenResponse, TokenRequest>({
      query: (credentials) => ({
        url: '/demo/auth',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useNewUserMutation, useGetAdamTokenMutation, useGetUserByIdQuery, useGetTokenMutation } = usersApi;

// Usage example:
// const { isLoading: isCreatingUser, mutate: createUser } = useNewUserMutation();
// const { isLoading: isFetchingToken, mutate: getAdamToken } = useGetAdamTokenMutation();
// const { data: userById, isLoading: isFetchingUser } = useGetUserByIdQuery(2);
// const { isLoading: isFetchingAuthToken, mutate: getAuthToken } = useGetTokenMutation();
