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

export const logoutSErvice = async () => {
  const path = PATHS.logout;

  try {
    return await Axios.post(path)
  } catch (error: any) {
    return error.response;
  }
}