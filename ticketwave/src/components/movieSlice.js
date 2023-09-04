import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movieSlice: [],
    },
    reducers: {
        resetMovie: (state, action) => {
            state.movieSlice = action.payload;
        },
    }
});


export const {resetMovie} = movieSlice.actions;
export default movieSlice.reducer;