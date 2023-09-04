// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return ( 
    <>
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white">
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
                <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
                <Link to="/contact">Contact Us</Link>
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   );
}
 
export default NavigationBar;