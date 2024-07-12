import { api } from "../../../api/api";
import { IComment } from "../../../types/Comment";

interface NewCommentRequest {
  comment: {
    authorId: number;
    addresseeId: number;
    rate: number;
    text: string;
  };
  token: string;
}

interface UpdateCommentRequest {
  comment: {
    id: number;
    rate: number;
    text: string;
  };
  token: string;
}

interface DeleteCommentRequest {
  id: number;
  token: string;
}

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    newComment: builder.mutation<IComment, NewCommentRequest>({
      query: ({ comment, token }) => ({
        url: "/secured/comment",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: comment,
      }),
      invalidatesTags: ['User', 'Comments']
    }),
    updateComment: builder.mutation<IComment, UpdateCommentRequest>({
      query: ({ comment, token }) => ({
        url: "/secured/comment/update",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: comment,
      }),
      invalidatesTags: ['User', 'Comments']
    }),
    deleteComment: builder.mutation<IComment, DeleteCommentRequest>({
      query: ({ token, id }) => ({
        url: `/secured/comment/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ['User', 'Comments']
    }),
    allCommentsByAddresseId: builder.query<IComment[], number>({
      query: (addresseeId) => `/comments/${addresseeId}`,
      providesTags: ["Comments"],
    }),
    currentUserComments: builder.query<IComment[], string>({
      query: (token) => ({
        url: `/secured/current-user/comments`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Comments"],
    }),
  }),
});

export const {
  useNewCommentMutation,
  useAllCommentsByAddresseIdQuery,
  useCurrentUserCommentsQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentsApi;

// Usage example:
// const { isLoading: isAddingComment, mutate: addComment } = useNewCommentMutation();
// const { data: comments, isLoading: isFetchingComments } = useAllCommentsByAddresseIdQuery(2);
