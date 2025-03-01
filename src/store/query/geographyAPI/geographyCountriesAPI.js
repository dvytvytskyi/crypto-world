import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "../domen";

export const geographyCountriesAPI = createApi({
  reducerPath: "geographyCountriesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/countries` }),
  endpoints: (builder) => ({
    getCountryBuyId: builder.query({
      query: (id) => `/${id}`,
    }),
    getCountries: builder.query({
      query: () => "",
    }),
    updateCountry: builder.mutation({
      query: ({ id, updatedCountryData }) => ({
        url: `/${id}`,
        method: "/PUT",
        body: updatedCountryData,
      }),
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryBuyIdQuery } =
  geographyCountriesAPI;
