import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    }
})

export const { login, logOut } = user.actions

export const userSelector = (state) => state.user

export default user.reducer