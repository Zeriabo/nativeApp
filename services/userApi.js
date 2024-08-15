import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://z-messaging-8f1dbb2d79d2.herokuapp.com/user/",
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
