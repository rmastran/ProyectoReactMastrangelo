import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
    const {deleteItem} = useContext(CartContext);
    return (
        <div className="d-flex justify-content-around align-items-center">
            <img src={item.img} alt={item.title} width={'150rem'}/>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Sub total: ${item.cantidad * item.price}</p>
            <button className="btn btn-danger" onClick={()=> deleteItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem;