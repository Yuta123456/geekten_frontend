import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
