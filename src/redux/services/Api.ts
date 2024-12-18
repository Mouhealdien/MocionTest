import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://erp-dev.mocion.io/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      console.log(token);

      if (token) {
        headers.set("access_token", token);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCourts: builder.query({
      query: () => `club/court_names?name=&club_id=29`,
    }),

    login: builder.mutation({
      query: () => ({
        url: "auth/login",
        method: "POST",
        body: JSON.stringify({ email: "test 3", password: "123456789" }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    createCoach: builder.mutation({
      query: (data) => ({
        url: "club/29/coach",
        method: "POST",
        body: data,
        headers: {
          //"Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetCourtsQuery, useCreateCoachMutation } =
  Api;
