import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/register.reducer";

export const store = configureStore({
  reducer: {
    register: registerReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;