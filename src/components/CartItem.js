import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ product, handleDelete }) => {
    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                        {product.dataPelota.title}
                    </Col>
                    <Col>
                        {product.dataPelota.cantidad}
                    </Col>
                    <Col>
                        {product.dataPelota.price}
                    </Col>
                    <Col>
                        <Button variant='danger' onClick={handleDelete}>Borrar</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CartItem;