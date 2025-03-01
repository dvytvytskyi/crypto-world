import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const analyticsCompanyStatisticAPI = createApi({
  reducerPath: "analyticsCompanyStatisticAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/companies-statistics` }),
  endpoints: (builder) => ({
    getTopCompaniesBuyContinent: builder.query({
      query: () => "/top-companies-by-continent",
    }),
    getTopCompanies: builder.query({
      query: (amount) => `/top-companies/${amount}`,
    }),
    getAmmountCompanies: builder.query({
      query: () => "/amount",
    }),
  }),
});

export const {
  useGetAmmountCompaniesQuery,
  useGetTopCompaniesQuery,
  useGetTopCompaniesBuyContinentQuery,
} = analyticsCompanyStatisticAPI;
