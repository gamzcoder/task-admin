import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createQuiz: builder.mutation({
      query: (data) => ({
        url: '/api/admin/quiz',
        method: 'POST',
        body: data,
      }),
    }),
    getQuiz: builder.query({
      query: () => ({
        url: '/api/admin/quiz',
        method: 'GET',
      }),
    }),
    getQuizById: builder.query({
      query: (id) => ({
        url: `/api/admin/quiz-details?id=${id}`,
        method: 'GET',
      }),
    }),
    updateQuiz: builder.mutation({
      query: (data) => ({
        url: '/api/admin/quiz',
        method: 'PUT',
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/api/login',
        method: 'POST',
        body: data,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/api/admin/quiz?id=${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useCreateQuizMutation,
  useLoginUserMutation,
  useGetQuizQuery,
  useGetQuizByIdQuery,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = api;
