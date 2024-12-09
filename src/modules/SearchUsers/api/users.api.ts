import { api } from "../../../api/api";
import { IUser } from "../../../types/User";
import { PAGINATION_SIZE } from "./consts";

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
    getUsers: builder.query({
      query: ({ username, from }) =>
        `/users/find-by-name/?username=${username}&from=${from}&size=${PAGINATION_SIZE}`,
      providesTags: ["User"],
    
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return endpointName;
      },
    
      merge: (currentCache, newItems, { arg }) => {

        if (arg.from === 0) {
          currentCache.splice(0, currentCache.length, ...newItems);
        } else {
          currentCache.push(...newItems);
        }
      },
    
      forceRefetch(params) {
        return (
          params.currentArg.username !== params.previousArg?.username ||
          (params.currentArg.from === 0 || params.currentArg.from !== params.previousArg.from)
        );
      },
    }),
    getUserById: builder.query<GetUserByIdResponse, GetUserByIdRequest>({
      query: ({ id }) => `/user/${id}`,
      providesTags: ["User"],
    }),

  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;