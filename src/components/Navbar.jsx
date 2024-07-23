import React from "react";
import { Navbar, Nav, Button, NavbarBrand } from "react-bootstrap";
import { Route, NavLink, Routes, Link } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Home from "./Home";
import CreateResume from "./CreateResume";
function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="lihgt"
        sticky="top"
        className="bg-light"
      >
        <Navbar.Brand>
          <Nav.Link>
            <span className="brand">
              Resume <strong className="">Builder</strong>
            </span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Resume Templates</Nav.Link>
            <Nav.Link>Resume Examples</Nav.Link>
            <Nav.Link>Resources</Nav.Link>
          </Nav>
          <Nav>
         

            
              <NavLink to="/create-resume">Create Resume</NavLink>

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
