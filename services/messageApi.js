import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",

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
    sendMessage: builder.query({
      query: (body) => ({
        //token,title,messagebody,receivers
        url: `sendmessages`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useReadMessagesQuery, useSendMessageQuery } = messageApi;
