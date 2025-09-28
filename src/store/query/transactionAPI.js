import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domen } from "./domen";

export const transactionAPI = createApi({
  reducerPath: "transactionAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${domen}/pixel-transactions` }),
  endpoints: (builder) => ({
    purchaseCountryPixel: builder.mutation({
      query: ({ purchaseData }) => ({
        url: "/country-pixel-purchase",
        method: "/POST",
        body: purchaseData,
      }),
    }),
    addTransaction: builder.mutation({
      query: (transactionData) => ({
        url: "/",
        method: "/POST",
        body: transactionData,
      }),
    }),
    getAllTransactions: builder.query({
      query: () => "/",
    }),
    getAllTransactionByID: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useAddTransactionMutation,
  useGetAllTransactionByIDQuery,
  useGetAllTransactionsQuery,
  usePurchaseCountryPixelMutation,
} = transactionAPI;
