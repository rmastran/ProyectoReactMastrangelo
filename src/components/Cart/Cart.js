import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartArray, clearCart, total } = useContext(CartContext);

    return (
        <div>
            {cartArray.length
            ? <div>
                {cartArray.map((item)=> <CartItem key={item.id} item={item}/>)}
                <p style={{textAlign: "center"}}>Total a pagar: ${total()}</p>
                <div>
                    <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
                    <Link className="btn btn-dark" to='/checkout'>Terminar compra</Link>
                </div>
            </div>
            :    <div>
                    <h3>No ha seleccionado pelota/s aún</h3> 
                    <Link to='/' className="btn btn-dark">Ir al inicio</Link>
                </div>
            }
        </div>
    )

}

export default Cart;