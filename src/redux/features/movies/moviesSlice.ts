import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    setMoviesSelected: (state, action) => {
      state.movies = action.payload;
    },
    resetMovies: (state) => {
      state.movies = [];
    },
  },
});

export const { setMoviesSelected, resetMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
