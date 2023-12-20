import React from 'react'
import Login from '../src/views/account/Login'
// import Login from '../src/Login'
import Register from './views/account/Register'
import { ToastContainer } from 'react-bootstrap'
import Header from './components/Layouts/Header'
import CustomerLayout from './components/Layouts/CustomerLayout'
import Home from './views/Home'
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
