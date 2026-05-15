import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{ 
            backgroundColor: "#e63946", 
            color: "white", 
            width: "40px", 
            height: "40px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            borderRadius: "8px",
            marginRight: "12px",
            fontWeight: "bold",
            fontSize: "24px"
          }}>R</span>
          <span className="d-none d-sm-inline" style={{ fontWeight: "700", color: "#1d3557" }}>
            Restaurants in Europe
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Head