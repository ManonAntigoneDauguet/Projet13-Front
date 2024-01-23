import { createSlice } from "@reduxjs/toolkit"


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isConnected: false,
        token: {},
        user: {}
    },
    reducers: {
        getData: (state, action) => {
            const user = { ...state, user: action.payload }
            const isConnected = { ...state, isConnected: true }
            return { user, isConnected }
        },
        postToken: (state, action) => {
            const token = { ...state, token: action.payload }
            return { token }
        },
        signOut: (state, action) => {
            const user = undefined
            const isConnected = { ...state, isConnected: false }
            return { user, isConnected }
        }
    }
})

export const { getData, postToken, signOut } = loginSlice.actions
export default loginSlice.reducer