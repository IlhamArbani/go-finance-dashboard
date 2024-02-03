import services from "@/services/services";
import { Transactions, TransactionsPayload } from "@/types";
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
      }),
      postTransaction: builder.mutation<void, TransactionsPayload>({
        query: (data) => ({url: '/transactions', data, method: 'post'})
      }),
      putTransaction: builder.mutation<void, {id: string | number, payload: TransactionsPayload}>({
        query: ({id, payload: data}) => ({url:`/transactions/${id}`, data, method: 'put'}) 
      })
    }
  },
})

export const {
  useGetTransactionsQuery,
  useDeleteTransactionsMutation,
  usePostTransactionMutation,
  usePutTransactionMutation,
} = transactionsApi;