import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = { movie: null };

const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovieState,
  reducers: {
    saveMovie(currentState, action) {
      currentState.movie = { ...action.payload };
    },
  },
});

export const { saveMovie } = movieSlice.actions;

export default movieSlice.reducer;
