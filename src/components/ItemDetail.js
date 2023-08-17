import { useContext, useState } from "react";
import ItemCount from "./Nav/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({dataPelota}) => {

    const [goToCart, setToCart] = useState(false);

    const { addToCart } = useContext(CartContext);

    const onAdd = (dataPelota, cantidad) => {
        addToCart(dataPelota, cantidad);
        setToCart(true);
    }

    return (
        <div>
            <h3>{dataPelota.title}</h3> 
            <img src={dataPelota.img} alt={dataPelota.title}/>
            <p>{dataPelota.description}</p>
            <p>{dataPelota.price}</p>
            {
                goToCart ? <Link to='/cart'>Terminar mi compra</Link> : <ItemCount initial={1} stock={dataPelota.stock} onAdd={onAdd}/>
            }
        </div>
    );
}

export default ItemDetail;