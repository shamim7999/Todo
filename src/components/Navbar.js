// src/components/Navbar.js
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarBootstrap() {
  


  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" hidden>Home</Nav.Link>
              {/* Add onClick handler to trigger modal */}
              
              <NavDropdown hidden title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled hidden>Link</Nav.Link>
            </Nav>
            
            

            {/* <Form hidden  className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search by Priority"
                className="me-2"
                aria-label="Search"
                hidden
              />
              <Button hidden variant="outline-success">Search</Button>
            </Form> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavbarBootstrap;
