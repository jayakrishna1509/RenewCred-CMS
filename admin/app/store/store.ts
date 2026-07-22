import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import pagesReducer from "../features/pages/pagesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pages: pagesReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;