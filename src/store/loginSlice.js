import { createSlice } from "@reduxjs/toolkit"


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isConnected: false,
        token: {},
        user: {}
    },
    reducers: {
        postData: (state, action) => {
            const user = action.payload
            const isConnected = true
            const token = state.token
            return { user, isConnected, token }
        },
        postToken: (state, action) => {
            const token = action.payload
            return { token }
        },
        signOut: (state, action) => {
            const user = undefined
            const isConnected = false
            return { user, isConnected }
        }
    }
})

export const { postData, postToken, signOut } = loginSlice.actions
export default loginSlice.reducer