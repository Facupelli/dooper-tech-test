import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../redux/features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    moviesSelected: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
