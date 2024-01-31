import services from "@/services/services";
import { Transactions } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: services(),
  endpoints(builder) {
    return {
      getTransactions: builder.query<Transactions, void>({
        query: () => ({url: '/transactions', method: 'get'})
      }),
      deleteTransactions: builder.mutation<void, number>({
        query: (id) => ({url: '/transactions/'+id, method: 'delete'}) 
      })
    }
  },
})

export const {
  useGetTransactionsQuery,
  useDeleteTransactionsMutation,
} = transactionsApi;