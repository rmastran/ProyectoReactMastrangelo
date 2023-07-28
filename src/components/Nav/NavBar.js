import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'><Logo/></Navbar.Brand>  
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <div style={{display: "flex"}}>
                        <Nav.Link as={NavLink}to= "/">Inicio</Nav.Link>
                        <NavDropdown title="Pelotas" id="bassic-nav-dropdown">
                          <NavDropdown.Item as={NavLink} to= "category/antiguas">Antiguas</NavDropdown.Item>
                          <NavDropdown.Item as={NavLink} to= "category/clasicas">Clásicas</NavDropdown.Item>
                          <NavDropdown.Item as={NavLink} to= "category/nuevas">Nuevas</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item as={NavLink} to= "/">Todas las Pelotas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink}to= "/Carrito"><CartWidget/></Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>            
                    
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;