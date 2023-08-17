import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cartArray } = useContext(CartContext);

    return (
        <div>
            {cartArray.map(prod => <p>{prod.dataPelota.title}</p>)}
        </div>
    )

}

export default Cart;