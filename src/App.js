import React from 'react'
// import Login from '../src/views/account/Login'
import Login from '../src/Login'
import Carousel from './components/Layouts/Carousel'
import EmployerCraousel from './components/Layouts/EmpCarousel'
import Register from './views/account/Register'
import { ToastContainer } from 'react-bootstrap'


export default function App() {
  return (
    // <Login/>
    // <Carousel/>
    // <EmployerCraousel/>
    <>
    <Register />
    <ToastContainer/>
  
    </>
    )
}
