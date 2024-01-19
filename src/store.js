import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { loginSlice } from "./features/login/loginSlice"

let state = {
  login: ""
}

const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    login: loginSlice.reducer,
  })
})

export default store