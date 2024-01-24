import { PATHS } from "@/constants";
import Axios from "..";

type Payload = {
  email: string;
  password: string;
}

export const loginService = async (payload: Payload) => {
  const path = PATHS.login;

  try {
    return await Axios.post(path, payload)
  } catch (error: any) {
    return error.response;
  }
}