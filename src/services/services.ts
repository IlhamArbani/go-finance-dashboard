import { BaseQueryFn } from "@reduxjs/toolkit/query";
import Axios from "."
import { AxiosError, AxiosRequestConfig } from "axios";

const services = (): BaseQueryFn<
{
  method: AxiosRequestConfig['method'];
  data?:AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  url: string;
}
> =>
async ({method, data, params, url}) => {
  try {
    const result = await Axios({
      url,
      method,
      data,
      params,
    })
    return {data: result.data}
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message
      }
    }
  }
}

export default services;