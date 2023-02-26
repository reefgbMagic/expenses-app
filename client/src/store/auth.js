import {createSlice} from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialAuthState = {
    loggedIn: false,
    userToken: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,

    reducers: {
        login(state) {
            state.loggedIn = true;
        },

        userInfo(state, action) {
            state.userToken = action.payload;
        },

        logout: (state) => initialAuthState,
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;