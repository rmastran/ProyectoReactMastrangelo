import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ item, handleDelete }) => {
    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                        {item.product.tittle}
                    </Col>
                    <Col>
                        {item.product.quant}
                    </Col>
                    <Col>
                        {item.product.price}
                    </Col>
                    <Col>
                        <Button variant='danger' onClick={handleDelete}>Borrar</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}