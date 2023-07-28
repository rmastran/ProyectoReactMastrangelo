import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to="/">
                <Navbar.Brand><Logo/></Navbar.Brand>
                </Link>
                
                <Nav className="me-auto">
                  <div style={{display: "flex"}}>
                      <Nav.Link as={Link}to= "/Inicio">Inicio</Nav.Link>
                      <Nav.Link as={Link} to= "category/Pelotas">Pelotas</Nav.Link>
                      <Nav.Link as={Link}to= "/Carrito"><CartWidget/></Nav.Link>
                  </div>
                </Nav>
                    
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;