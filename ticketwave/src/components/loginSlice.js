import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        loginSlice: [],
        loginAccount: "",
    },
    reducers: {
        resetLogin: (state, action) => {
            state.loginSlice = action.payload;
        },
        accountLogin: (state, action) => {
            state.loginAccount = action.payload;
        },

    }
});


export const { resetLogin, accountLogin } = loginSlice.actions;
export default loginSlice.reducer;