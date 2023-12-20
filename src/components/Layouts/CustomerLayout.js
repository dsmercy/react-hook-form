import React from 'react'
import Header from './Header'
import { Outlet, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function CustomerLayout() {
  return (
    <>
    <Header />
      <Container
        style={{ 
          backgroundColor: 'none',padding: 50
        }} 
      > 
        <Outlet />
      </Container> 
    </>
  )
}
