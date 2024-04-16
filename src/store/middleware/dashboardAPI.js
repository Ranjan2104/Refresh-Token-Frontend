import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';


export const GetDashboardAPi = createApi({
  reducerPath: 'GetDashboardAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get('accessToken');
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDashboardApi: builder.query({
      query: (value) => `api/v1/getdashboardDetails`,
    }),
  }),
})

export const { useGetDashboardApiQuery } = GetDashboardAPi