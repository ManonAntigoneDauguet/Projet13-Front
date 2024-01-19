import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
// redux
import { Provider } from "react-redux"
import store from './store'
// style
import './index.css'
// layouts
import Header from './layouts/header'
import Footer from './layouts/footer'
// pages
import Home from './pages/home'
import SignIn from './pages/signIn'
import User from './pages/user'
import Transactions from './pages/transactions'
import EditUser from './pages/editUser'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/transactions/:accountId" element={<Transactions />}></Route>
          <Route path="/edit-user" element={<EditUser />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
