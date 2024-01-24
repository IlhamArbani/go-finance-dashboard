import { PATHS } from "@/constants"
import Axios from "..";
import { TransactionsPayload } from "@/types";

const path = PATHS.transactions;

export const getTransactionsService = async () => {
  try {
    return Axios.get(path)
  } catch (error: any) {
    return error.response
  }
}

export const postTransactionService = async (payload: TransactionsPayload) => {
  try {
    return Axios.post(path, payload)
  } catch (error: any) {
    return error.response
  }
}