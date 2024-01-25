import { PATHS } from "@/constants";
import { RegisterPayload } from "@/types";
import Axios from "..";

export const postUserService = async (payload: RegisterPayload) => {
  const path = PATHS.users;

  try {
    return await Axios.post(path, payload)
  } catch (error: any) {
    return error.response
  }
}