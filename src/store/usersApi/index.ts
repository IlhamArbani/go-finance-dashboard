import services from "@/services/services";
import { RegisterPayload, User } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: services(),
  endpoints(builder){
    return {
      getUser: builder.query<User, string | null>({
        query: (id) => ({url: `users/${id}`, method: 'get'})
      }),
      postUser: builder.mutation<void, RegisterPayload>({
        query: (data) => ({url: '/users', data, method: 'post'})
      })
    }
  }
})

export const {
  useGetUserQuery,
  usePostUserMutation,
} = usersApi;