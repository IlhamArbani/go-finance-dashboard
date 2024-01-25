import { resetDetailTransaction, resetStatus, resolveDeleteTransactionService, resolveGetTransactionService, resolveGetTransactionsService, resolvePostTransactionService, resolvePutTransactionService } from "@/store/transactions/transactions.reducer";
import { useAppDispatch, useAppSelector } from "./useStore";
import { mapDetailTransaction, mapTransactions } from "@/mapers/transactions";
import { TransactionsPayload } from "@/types";

const useTransactions = () => {
  const dispatch = useAppDispatch();
  const {status, data, detailTransaction} = useAppSelector(state => state.transactions);

  const handelResolveGetTransactionsService = () => {
    dispatch(resolveGetTransactionsService())
  }

  const handelResetStatus = () => {
    dispatch(resetStatus());
  }

  const handelResolvePostTransactionService = (payload: TransactionsPayload) => {
    dispatch(resolvePostTransactionService(payload))
  }

  const handelDeleteResolveTransactionService = (id: string) => {
    dispatch(resolveDeleteTransactionService(id))
  }

  const handleResolveGetTransactionService = (id: string) => {
    dispatch(resolveGetTransactionService(id))
  }

  const handelResolvePutTransactionService = (payload: TransactionsPayload, id: string) => {
    dispatch(resolvePutTransactionService({payload, id}))
  }

  const handelResetDetailTransaction = () => {
    dispatch(resetDetailTransaction());
  }

  return {
    method: {
      handelResolveGetTransactionsService,
      handelResetStatus,
      handelResolvePostTransactionService,
      handelDeleteResolveTransactionService,
      handleResolveGetTransactionService,
      handelResolvePutTransactionService,
      handelResetDetailTransaction,
    },
    data: {
      status,
      transactions: mapTransactions(data),
      detailTransaction: mapDetailTransaction(detailTransaction),
    },
  }
}

export default useTransactions;