import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand as={Link} to="/home"><img className="logo mt-4" src={logo} alt="" /></Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle className="navbar-toggler navbar-toggler-right bg-light" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse bg="light" id="basic-navbar-nav">
                            <Nav className="me-auto align-items-center">
                                <Nav.Link as={HashLink} to="/home#home" ><Button variant="outline-info">Home</Button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services"><Button variant="outline-info">Services</Button></Nav.Link>
                                <NavLink to="/about" className="mx-2"><Button variant="outline-info">About Us</Button></NavLink>
                                <NavLink to="/appointment" className="mx-2"><Button variant="outline-info">Appointment</Button></NavLink>
                                <NavLink to="/contact" className="mx-2"><Button variant="outline-info">Contact</Button></NavLink>
                                {user?.email ?
                                    <Button className="mx-2 px-4" onClick={logOut} variant="danger">LogOut</Button>
                                    :
                                    <NavLink to="/login" className="mx-2"><Button className="mx-2 px-4" variant="success">LogIn</Button></NavLink>}
                                <Navbar.Text className="text-white mx-3">
                                    Signed in as : <a className="text-white" href="#login">{user.email}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;