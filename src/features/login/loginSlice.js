import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: {}
    },
    reducers: {
        getData: (state, action) => {
            const user = { ...state, user: action.payload }
            return user
        }
    }
})

export const { getData } = loginSlice.actions
export default loginSlice.reducer