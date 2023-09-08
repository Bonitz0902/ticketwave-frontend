import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
    name: "seatSlice",
    initialState: {
        seatSlice: [],
        seatAvailable: [],
        selectedSeats: [],
    },
    reducers: {
        resetAllSeat: (state, action) => {
            state.seatSlice = action.payload;
        },

        resetAllAvailableSeat: (state, action) => {
            state.seatAvailable = action.payload;
        },
        
        setSelectedSeats: (state, action) => {
            state.selectedSeats = action.payload;
        },
    }
});


export const {resetAllSeat, resetAllAvailableSeat, setSelectedSeats} = seatSlice.actions;
export default seatSlice.reducer;