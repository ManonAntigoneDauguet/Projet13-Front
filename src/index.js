import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
// redux
import { Provider } from "react-redux"
import store from './store/store'
// style
import './index.css'
// layouts
import Header from './layouts/header'
import Footer from './layouts/footer'
// pages
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Transactions from './pages/transactions'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/transactions/:accountId" element={<Transactions />}></Route>
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
