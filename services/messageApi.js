import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://z-messaging-8f1dbb2d79d2.herokuapp.com/",
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
        url: `sendmessage`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useReadMessagesQuery, useSendMessageQuery } = messageApi;
