import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css"

const Layout = () => {
  return (
    <main>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            {" "}
            {/*home helyett csak / összeakad :(( */}
            <img src="/pictures/booze-logo.png" alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/drinks">
                Drinks
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
            </Nav>
            <Nav className="welcomeText">
              <h1>Booze now</h1>
              <p>Don't wait in line.</p>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/shoppingCart">
                Shopping cart
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutUs">
                About us
              </Nav.Link>


              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              {/*should be hidden person icon */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="notification">{/* place for err.messages */}</div>

      <article>
        <Outlet />
      </article>
    </main>
  );
};

export default Layout;
