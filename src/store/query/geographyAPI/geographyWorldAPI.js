import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const geographyWorldAPI = createApi({
  reducerPath: "geographyWorldAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/world` }),
  endpoints: (builder) => ({
    getTotalPixelNumber: builder.query({
      query: () => "/total-pixel-number",
    }),
    getTotalSoldPixelNumber: builder.query({
      query: () => "/total-sold-pixel-number",
    }),
  }),
});

export const { useGetTotalPixelNumberQuery, useGetTotalSoldPixelNumberQuery } =
  geographyWorldAPI;
