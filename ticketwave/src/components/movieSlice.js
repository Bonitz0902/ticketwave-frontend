import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movieSlice: [],
        movieAvailable: [],
        selectedMovie: null,
        cinemaLocations: [],
        cinemas: [],
        movieSchedules: [],
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
        },
        loadCinemas: (state, action) => {
            state.cinemas = action.payload;
        },
        loadSchedules: (state, action) => {
            state.movieSchedules = action.payload;
        }
    }
});


export const {resetMovie, resetAllMovie,
    setSelectedMovie, loadLocations,
    loadCinemas, loadSchedules} = movieSlice.actions;
export default movieSlice.reducer;