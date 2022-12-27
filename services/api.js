import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/user/",
    prepareHeaders: (headers, { getState }) => {
      // Get token from store (userSlice)
      const token = getState().user.token;

      // Add token to headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `login`,
        method: "POST",
        body: credentials,
      }),
    }),

    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery } = api;
