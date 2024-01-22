import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "../../services/callAPI.service"


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
            return {user, isConnected}
        },
        postToken: (state, action) => {
            const token = { ...state, token: action.payload }
            return {token}
        }
    }
})

export const { getData, postToken } = loginSlice.actions
export default loginSlice.reducer