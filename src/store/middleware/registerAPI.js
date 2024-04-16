import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterAPI = createApi({
  reducerPath: "RegisterAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    apiRegister: builder.mutation({
      query: (payload) => ({
        url: `api/v1/adduser`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiRegisterMutation } = RegisterAPI;
