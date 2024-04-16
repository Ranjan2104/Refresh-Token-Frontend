import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TokenAPI = createApi({
  reducerPath: "TokenAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    apiToken: builder.mutation({
      query: (payload) => ({
        url: `api/v1/getToken`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiTokenMutation } = TokenAPI;
