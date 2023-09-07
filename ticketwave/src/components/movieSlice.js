import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movieSlice: [],
        movieAvailable: [],
        selectedMovie: null,
        cinemaLocations: [],
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
        loadLocations: (state, action) => {
            state.cinemaLocations = action.payload;
        }
    }
});


export const {resetMovie, resetAllMovie,
    setSelectedMovie, loadLocations} = movieSlice.actions;
export default movieSlice.reducer;