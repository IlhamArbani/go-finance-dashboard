import services from "@/services/services";
import { LoginPayload, LoginResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: services(),
  endpoints(builder){
    return {
      login: builder.mutation<LoginResponse, LoginPayload>({
        query: (data) => ({url: '/register', data, method: 'post'})
      }),
      logout: builder.mutation<void, void>({
        query: () => ({url: '/logout', method: 'post'})
      })
    }
  }
});

export const {
  useLoginMutation,
  useLogoutMutation,
} = authApi