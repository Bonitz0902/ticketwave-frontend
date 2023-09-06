import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        loginSlice: [],
    },
    reducers: {
        resetLogin: (state, action) => {
            state.loginSlice = action.payload;
        },
    
    }
});


export const { resetLogin } = loginSlice.actions;
export default loginSlice.reducer;