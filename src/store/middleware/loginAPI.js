import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LoginAPI = createApi({
  reducerPath: "LoginAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    apiLogin: builder.mutation({
      query: (payload) => ({
        url: `api/v1/login`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiLoginMutation } = LoginAPI;
