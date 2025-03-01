import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "./domen";


export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/users` }),
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (userData)=>({
            url: "/login",
            method: "/POST",
            body: userData
        })
    }),
    register: builder.mutation({
        query: (userData)=>({
            url: "/register",
            method: "/POST",
            body: userData
        })
    })
  }),
  
});

export const {
useLoginMutation,useRegisterMutation
} = userAPI;
