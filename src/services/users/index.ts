import { PATHS } from "@/constants";
import { RegisterPayload } from "@/types";
import Axios from "..";

const path = PATHS.users;

export const postUserService = async (payload: RegisterPayload) => {

  try {
    return await Axios.post(path, payload)
  } catch (error: any) {
    return error.response
  }
}

export const getUserService = async (id: string) => {
  try {
    return await Axios.get(`${path}/${id}`)
  } catch (error: any) {
    return error.response
  }
}