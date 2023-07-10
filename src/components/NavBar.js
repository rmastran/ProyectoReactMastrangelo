import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#La-Mejor-Pelota">La Mejor Pelota</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Inicio">Inicio</Nav.Link>
                <Nav.Link href="#Pelotas">Pelotas</Nav.Link>
                <Nav.Link href="#Carrito"><CartWidget/></Nav.Link>
                <h2 style={{color: "white"}}>1</h2>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;