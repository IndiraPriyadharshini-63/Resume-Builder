import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./Navbar.css";
function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        sticky="top"
        className="bg-light d-flex "
      >
        <Navbar.Brand className="justify-content-start">
          <Nav.Link href="/">
            <span className="brand ms-4">
              Resume <strong>Builder</strong>
            </span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end me-4" >
          {/* <Nav className="mr-auto">
            <Nav.Link>Resume Templates</Nav.Link>
            <Nav.Link>Resume Examples</Nav.Link>
            <Nav.Link>Resources</Nav.Link>
          </Nav> */}
          <Nav className="nav-list">
            <NavLink to="/create-resume">Create Resume</NavLink>
            <NavLink to="/templates">Templates</NavLink>
            <NavLink to="/my-resumes">My Resumes</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        transition={Slide}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default NavBar;
