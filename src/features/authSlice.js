// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
             login(state, action) {

            state.user = action.payload;

            // const response = await fetch('https://dummyjson.com/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(action.payload), // Assuming action.payload contains the login credentials
            // });

            // console.log({response})

            // localStorage.setItem('user', JSON.stringify(action.payload));

            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
        // setUserFromLocalStorage(state) {
        //     const user = JSON.parse(localStorage.getItem('user'));
        //     if (user) {
        //         state.user = user;
        //     }
        // },
    },
});

export const { login, logout, setUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
