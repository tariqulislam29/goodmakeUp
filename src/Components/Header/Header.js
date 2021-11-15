import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import "./Header.css"

export default function Header() {
    const { user, logout } = useAuth();
    return (
        <div className="head ">
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" >
                    <Container>
                        <Nav.Link> <Navbar.Brand className="fw-bold fs-5 text-light">Good Make<span className="makeup-text fs-1">UP</span></Navbar.Brand></Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggle " />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto fs-5 makeup-nav">
                                <Nav.Link as={Link} to='/home' className="p-3 makeup-text navItem">Home</Nav.Link>
                                <Nav.Link as={Link} to='/explore' className="p-3 makeup-text navItem" >Explore</Nav.Link>

                                {
                                    user.email ?
                                        <div className="admin fs-5">

                                            <Nav.Link as={Link} to='/dashboard' className="p-3 makeup-text navItem">Dashboard</Nav.Link>

                                            <button className="bg-dark p-3 makeup-text navItem" onClick={logout}>Logout</button>
                                        </div>

                                        :
                                        <Nav.Link as={Link} to='/login' className="py-1 px-2 makeup-text d-flex align-items-center logInBtn">Log In</Nav.Link>
                                }



                            </Nav>

                        </Navbar.Collapse>
                    </Container>


                </Navbar>
            </header>

        </div>
    )
}
