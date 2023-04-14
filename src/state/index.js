import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie:null,
    movieId:0,
};

export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload.movie
        },

        setMovieId: (state, action) => {
            state.movieId = action.payload.movieId
        }
    }
})

export const { setMovie, setMovieId} = movieSlice.actions;
export default movieSlice.reducer;