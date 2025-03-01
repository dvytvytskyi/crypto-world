import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "./domen";

export const marketPlaceAPI = createApi({
  reducerPath: "marketPlaceAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/market-listings` }),
  endpoints: (builder) => ({
    putPixelsOnMarketPlace: builder.mutation({
      query: (lotData) => ({
        url: "/create-market-listing",
        method: "/POST",
        body: lotData,
      }),
    }),
    addMarketListing: builder.mutation({
      query: (marketListingData) => ({
        url: "/",
        method: "/POST",
        body: marketListingData,
      }),
    }),
    getAllMarketListings: builder.query({
      query: () => "/",
    }),
    getAllMarketListingsByID: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useAddMarketListingMutation,
  useGetAllMarketListingsByIDQuery,
  useGetAllMarketListingsQuery,
  usePutPixelsOnMarketPlaceMutation,
} = marketPlaceAPI;
