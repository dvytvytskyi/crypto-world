import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const geographyContinentsAPI = createApi({
  reducerPath: "geographyContinentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/continents` }),
  endpoints: (builder) => ({
    getContinentBuyId: builder.query({
      query: (id) => `/${id}`,
    }),
    getContinents: builder.query({
      query: () => "/",
    }),
    updateContinent: builder.mutation({
      query: ({ id, updatedContinentData }) => ({
        url: `/${id}`,
        method: "/PUT",
        body: updatedContinentData,
      }),
    }),
  }),
});

export const {
  useGetContinentBuyIdQuery,
  useGetContinentsQuery,
  useUpdateContinentMutation,
} = geographyContinentsAPI;
