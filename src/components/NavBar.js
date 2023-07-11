import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from './Logo';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div>
                        <Navbar.Brand href="#La-Mejor-Pelota"><Logo/></Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Nav.Link href="#Inicio">Inicio</Nav.Link>
                            <Nav.Link href="#Pelotas">Pelotas</Nav.Link>
                            <Nav.Link href="#Carrito"><CartWidget/></Nav.Link>
                        </div>
                        </Nav>
                    </div>
                    
                </div>
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;