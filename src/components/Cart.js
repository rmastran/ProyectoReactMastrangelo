import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem';

const Cart = () => {
    const { cartArray } = useContext(CartContext);

    const handleDelete = () => {

    }

    return (
        <div>
            {cartArray.map(prod => <CartItem key={prod.dataPelota.id} product={prod} handleDelete={handleDelete} />)}
        </div>
    )

}

export default Cart;