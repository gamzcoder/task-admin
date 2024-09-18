import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createQuiz: builder.mutation({
      query: (data) => ({
        url: '/admin/quiz',
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const { useRegisterUserMutation, useCreateQuizMutation } = api;
