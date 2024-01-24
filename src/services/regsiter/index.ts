import { PATHS } from "@/constants";
import { RegisterPayload } from "@/types";
import Axios from "..";

export const registerService = async (payload: RegisterPayload) => {
  const path = PATHS.register;

  try {
    return await Axios.post(path, payload)
  } catch (error: any) {
    return error.response
  }
}