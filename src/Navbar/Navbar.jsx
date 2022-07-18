import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Modal, Button, Dropdown } from 'react-bootstrap'
import "../App.scss";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"
import { useState } from 'react';



const BootstrapNavbar = () => {
    const [showModalforSignin, setShowModalforSignin] = useState(false);
    const handleCloseforSignin = () => setShowModalforSignin(false);
    const handleShowforSignin = () => setShowModalforSignin(true);

    const [showModalforSignup, setShowModalforSignup] = useState(false);
    const handleCloseforSignup = () => setShowModalforSignup(false);
    const handleShowforSignup = () => setShowModalforSignup(true);

    const [showDropdown, setShowDropdown] = useState(false);


    const ModalForSignIn = () => {
        return (
            <>
                <Modal show={showModalforSignin} onHide={handleCloseforSignin} >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ height: "400px" }}>Body</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseforSignin}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseforSignin}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
    const ModalForSignUp = () => {
        return (
            <>
                <Modal show={showModalforSignup} onHide={handleCloseforSignup} >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ height: "400px" }}>Body</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseforSignup}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseforSignup}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    return (
        <>
            <ModalForSignIn />
            <ModalForSignUp />

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-3.5'>
                <Container>
                    <Navbar.Brand href="#home">  <img src={logo} alt="" height='50' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link className="nav-link active" to="/" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>Home</Link>
                            <Link className="nav-link" to="#" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>About</Link>
                            <Link className="nav-link" to="/products" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>Product</Link>
                            <Link className="nav-link" to="#" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>Services</Link>
                            <Link className="nav-link" to="#" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>Shop</Link>
                            <Link className="nav-link" to="#" style={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "14px" }}>Contact</Link>
                            <Dropdown
                                onMouseLeave={() => setShowDropdown(false)}
                                onMouseOver={() => setShowDropdown(true)}
                                style={{ width: '130px'}}
                                

                            >
                                <NavDropdown title={" Water-Purifier"} id="basic-nav-dropdown" />

                                <Dropdown.Menu show={showDropdown} style={{padding:"10px"}}>
                                    <Dropdown.Item >
                                        Copper Range Water Purifiers
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        Eco Ro Water Purifiers
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        Ev Water Purifiers
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav>
                                <div >
                                    <div className="btn btn-outline-dark" onClick={handleShowforSignin}> <i className="fa fa-sign-in me-1"></i> Login</div>
                                    <div className="btn btn-outline-dark ms-2" onClick={handleShowforSignup}> <i className="fa fa-user-plus me-1"></i> Register</div>
                                    <div className="btn btn-outline-dark ms-2" onClick={() => { console.log("clicked") }}> <i className="fa fa-shopping-cart ms-2"></i> Cart (0)</div>
                                </div>
                            </Nav>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default BootstrapNavbar;