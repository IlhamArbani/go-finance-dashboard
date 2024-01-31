import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import transactionsReducer from "./transactions/transactions.reducer";
import usersReducer from "./users/users.reducer";
import { transactionsApi } from "./transactionsApi";
import { usersApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    transactions: transactionsReducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      transactionsApi.middleware,
      usersApi.middleware
    ])
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;