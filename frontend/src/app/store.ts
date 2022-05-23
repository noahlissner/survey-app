import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// For dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
