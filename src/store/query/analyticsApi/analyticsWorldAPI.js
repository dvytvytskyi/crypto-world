import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const analyticsWorldAPI = createApi({
  reducerPath: "analyticsWorldAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/world-statistics` }),
  endpoints: (builder) => ({
    getStatsForWorld: builder.query({
      query: () => "",
    }),
    getTotalPixelInTheWorld: builder.query({
      query: () => "/total-pixels",
    }),
    getTotalSoldPixelsInTheWorld: builder.query({
      query: () => "/total-sold-pixels",
    }),
  }),
});

export const {
  useGetStatsForWorldQuery,
  useGetTotalPixelInTheWorldQuery,
  useGetTotalSoldPixelsInTheWorldQuery,
} = analyticsWorldAPI;
