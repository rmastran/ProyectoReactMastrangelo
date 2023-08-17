import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <i className="bi bi-cart2"></i>
            <h2 style={{color: "white", fontSize: 15}}><Badge bg="secondary">1</Badge></h2>;
        </div>
    );
}

export default CartWidget;