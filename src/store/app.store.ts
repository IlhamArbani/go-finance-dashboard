import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import transactionsReducer from "./transactions/transactions.reducer";
import usersReducer from "./users/users.reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    transactions: transactionsReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;