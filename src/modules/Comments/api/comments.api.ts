import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface NewCommentRequest {
  authorId: number;
  addresseeId: number;
  rate: number;
  text: string;
}

interface CommentResponse {
  id: number;
  authorId: number;
  authorName: string;
  addresseeId: number;
  rate: number;
  text: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8189' }),
  endpoints: (builder) => ({
    newComment: builder.mutation<CommentResponse, NewCommentRequest>({
      query: (commentData) => ({
        url: '/demo/secured/comment',
        method: 'POST',
        body: commentData,
      }),
    }),
    allCommentsByAddresseId: builder.query<CommentResponse[], number>({
      query: (addresseeId) => `/demo/comments/${addresseeId}`,
    }),
  }),
});

export const { useNewCommentMutation, useAllCommentsByAddresseIdQuery } = commentsApi;

// Usage example:
// const { isLoading: isAddingComment, mutate: addComment } = useNewCommentMutation();
// const { data: comments, isLoading: isFetchingComments } = useAllCommentsByAddresseIdQuery(2);

