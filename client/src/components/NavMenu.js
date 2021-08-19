import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavMenu(){

    return(
  
    <>

 
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

    </>
    )
}

export default NavMenu