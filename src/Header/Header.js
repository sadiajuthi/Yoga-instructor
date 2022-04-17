import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='sticky-top'>
            <>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand className='text-success fs-2 fw-bold mb-2' href="#home">Relaxia</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link href='home#service'>Services</Nav.Link>
                                <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                                <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to='/signin'><button className='btn btn-success'>Sign In</button></Nav.Link>
                                <Nav.Link as={Link} to='/signup'><button className='btn btn-success'>Sign Up</button></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>

    );
};

export default Header;