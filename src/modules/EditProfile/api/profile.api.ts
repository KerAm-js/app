import { api } from "../../../api/api";
import { IUser } from "../../../types/User";

const profileApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    currentUser: builder.query<
      Pick<
        IUser,
        | "id"
        | "username"
        | "phone"
        | "description"
        | "email"
        | "rating"
        | "ratesCount"
      >,
      string
    >({
      query: (token) => ({
        url: "/secured/current-user/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateProfile: builder.mutation<
      Pick<IUser, "username" | "phone" | "description" | "email">,
      {
        userData: Pick<IUser, "username" | "phone" | "description"> & {
          password: string;
        };
        token: string;
      }
    >({
      query: (args) => {
        const { token, userData } = args;
        return {
          url: "/secured/current-user/update-user",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: userData,
        };
      },
      transformErrorResponse: (
        response: {
          data: {
            error: string;
            path: string;
            status: number;
            timestamp: string;
          };
          status: number;
        },
        meta,
        arg
      ) => {
        console.log(response.data.error);
        return response.data.error;
      },
    }),
    updatePassword: builder.mutation<
      { oldPassword: string; newPassword: string },
      string
    >({
      query: (body) => ({
        url: "/secured/current-user/update-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation, useUpdatePasswordMutation, useCurrentUserQuery } =
  profileApi;
