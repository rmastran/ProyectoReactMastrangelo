import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext);
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <i className="bi bi-cart2"></i>
            <h2 style={{color: "white", fontSize: 15}}>
                {cartQuantity() > 0 && <Badge bg="secondary">{cartQuantity()}</Badge>}
            </h2>;
        </div>
    );
}

export default CartWidget;