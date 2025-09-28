import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const analyticsSpecificStatisticsAPI = createApi({
  reducerPath: "analyticsSpecificStatisticsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${domen}/country-specific-statistics`,
  }),
  endpoints: (builder) => ({
    getStatsForSpecificCountry: builder.query({
      query: (country) => `/${country}`,
    }),
    getTopCountries: builder.query({
      query: (number) => `/top/${number}`,
    }),
  }),
});

export const { useGetStatsForSpecificCountryQuery, useGetTopCountriesQuery } =
  analyticsSpecificStatisticsAPI;
