import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Head() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"26px"}}>
         <span style={{color:"red", fontSize:"35px"}}> R</span>estaurants in Europe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head