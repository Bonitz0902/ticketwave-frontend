import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movieSlice: [],
        movieAvailable: [],
        selectedMovie: null,
    },
    reducers: {
        resetMovie: (state, action) => {
            state.movieSlice = action.payload;
        },

        resetAllMovie: (state, action) => {
            state.movieAvailable = action.payload;
        },
        
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
    }
});


export const {resetMovie, resetAllMovie, setSelectedMovie} = movieSlice.actions;
export default movieSlice.reducer;