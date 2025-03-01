import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const analyticsMarketAPI = createApi({
  reducerPath: "analyticsMarketAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/marketplace-statistics` }),
  endpoints: (builder) => ({
    getMarketAmountOfPixels: builder.query({
      query: () => "/amountOfPixelsSale",
    }),
    getMarketTotalSellers: builder.query({
      query: () => "/totalSellers",
    }),
  }),
});

export const {
  useGetMarketAmountOfPixelsQuery,
  useGetMarketTotalSellersQuery,
} = analyticsMarketAPI;
