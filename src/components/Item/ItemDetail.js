import { useContext, useState } from "react";
import ItemCount from "../Nav/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({dataPelota}) => {

    const [goToCart, setToCart] = useState(false);

    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addToCart(dataPelota, cantidad);
        setToCart(true);
    }

    return (
        <div>
            <h3 style={{textAlign: "center"}}>{dataPelota.title}</h3> 
            <img src={dataPelota.img} alt={dataPelota.title}/>
            <p style={{textAlign: "center"}}>{dataPelota.description}</p>
            <p style={{textAlign: "center"}}>${dataPelota.price}</p>
            { 
                dataPelota.stock === 0 && goToCart ?
                <div style={{textAlign: "center"}}>¡No hay Stock!</div>
                :
                <div>
                    <Link className="btn btn-dark btn-success" to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={dataPelota.stock} onAdd={onAdd}/>
                </div>
            }
        </div>
    );
}

export default ItemDetail;