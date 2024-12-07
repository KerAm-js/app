import { api } from "../../../api/api";
import { IAdvert } from "../../../types/Advert";
import { IUser } from "../../../types/User";




export const likesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addLike: builder.mutation({
      query: ({ credentials, token }) => {
        return ({
        url: `/secured/likes/post`,
        method: 'POST',
        body: credentials,
        headers: { Authorization: `Bearer ${token}` }
      })},
      invalidatesTags: ["Likes"]
    }),
    deleteLike: builder.mutation({
      query: ({ id, token }) => {
        return ({
        method: 'POST',
        url: `/secured/likes/delete/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      })},
      invalidatesTags: ["Likes"]
    }),
    getCurrentUserLikes: builder.query({
      query: ({ token }) => ({
        url: `/secured/current-user/likes`,
        headers: { Authorization: `Bearer ${token}` } 
      }),
      providesTags: ['Likes']
    }),
  }),
});

export const {
  useAddLikeMutation,
  useDeleteLikeMutation,
  useGetCurrentUserLikesQuery
} = likesApi;

