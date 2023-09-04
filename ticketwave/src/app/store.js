import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "../components/movieSlice";

export const store = configureStore({
    reducer: {
        movieSlice: movieSliceReducer
    }
});

