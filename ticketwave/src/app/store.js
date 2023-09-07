import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "../components/movieSlice";
import loginSlice from "../components/loginSlice";

export const store = configureStore({
    reducer: {
        movieSlice: movieSliceReducer,
        loginSlice: loginSlice
    }
});

