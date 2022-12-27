import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/user/",
  }),

  endpoints: (builder) => ({
    login: builder.query({
      query: (credentials) => ({
        url: `signin`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginQuery } = userApi;
