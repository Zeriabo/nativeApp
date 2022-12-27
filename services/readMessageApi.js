import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const readMessageApi = createApi({
  reducerPath: "readMessageApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),

  endpoints: (builder) => ({
    readMessages: builder.query({
      query: (token) => ({
        url: `readmessages`,
        method: "POST",
        body: token,
      }),
    }),
  }),
});

export const { useReadMessagesQuery } = readMessageApi;
