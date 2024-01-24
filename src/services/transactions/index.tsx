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

export const putTransactionService = async (payload: TransactionsPayload, id: string) => {
  try {
    return Axios.put(`${path}/${id}`, payload)
  } catch (error: any) {
    return error.response
  }
}

export const deleteTransaction = async (id: string) => {
  try {
    return Axios.delete(`${path}/${id}`)
  } catch (error: any) {
    return error.response
  }
}