import { resetStatus, resolveDeleteTransactionService, resolveGetTransactionService, resolvePostTransactionService } from "@/store/transactions/transactions.reducer";
import { useAppDispatch, useAppSelector } from "./useStore";
import { mapTransactions } from "@/mapers/transactions";
import { TransactionsPayload } from "@/types";

const useTransactions = () => {
  const dispatch = useAppDispatch();
  const {status, data} = useAppSelector(state => state.transactions);

  const handelResolveGetTransactionsService = () => {
    dispatch(resolveGetTransactionService())
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

  return {
    method: {
      handelResolveGetTransactionsService,
      handelResetStatus,
      handelResolvePostTransactionService,
      handelDeleteResolveTransactionService,
    },
    data: {
      status,
      transactions: mapTransactions(data),
    },
  }
}

export default useTransactions;