import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "../components/movieSlice";
import loginSlice from "../components/loginSlice";
import seatSlice from "../components/seatSlice";

export const store = configureStore({
    reducer: {
        movieSlice: movieSliceReducer,
        loginSlice: loginSlice,
        seatSlice: seatSlice
    }
});

