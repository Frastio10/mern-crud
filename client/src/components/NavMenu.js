import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavMenu(){

    return(
  
    <>

 
    <Navbar bg="primary" variant="dark">
        <Container>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <Nav className="">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/create" >Create Post</Link>
        </Nav>
        </Container>
    </Navbar>

    </>
    )
}

export default NavMenu