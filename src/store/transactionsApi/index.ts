import Axios from "@/services";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: 'api',
  baseQuery: Axios,
  endpoints(builder) {
    return {
      
    }
  },
})