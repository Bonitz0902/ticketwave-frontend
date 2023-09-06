import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movieSlice: [],
        selectedMovie: 0,
    },
    reducers: {
        resetMovie: (state, action) => {
            state.movieSlice = action.payload;
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
    }
});


export const {resetMovie, setSelectedMovie} = movieSlice.actions;
export default movieSlice.reducer;