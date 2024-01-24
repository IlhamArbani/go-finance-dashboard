import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/register.reducer";
import authReducer from "./auth/auth.reducer";
import transactionsReducer from "./transactions/transactions.reducer";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer,
    transactions: transactionsReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;