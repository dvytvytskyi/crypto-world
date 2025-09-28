import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "./domen";

export const companyAPI = createApi({
  reducerPath: "companyAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/companies` }),
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: () => "/",
    }),
    getCompanyBuyId: builder.query({
      query: (id) => `/${id}`,
    }),
    addCompany: builder.mutation({
      query: (newCompanyData) => ({
        url: "/",
        method: "/POST",
        body: newCompanyData,
      }),
    }),
    updateCompany: builder.mutation({
      query: ({ id, updatedCompanyData }) => ({
        url: `/${id}`,
        method: "/PUT",
        body: updatedCompanyData,
      }),
    }),
    deleteCompany: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "/DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCompaniesQuery,
  useGetCompanyBuyIdQuery,
  useAddCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyAPI;
