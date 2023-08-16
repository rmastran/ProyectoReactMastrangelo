import { useState } from "react";
import ItemCount from "./Nav/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({dataPelota}) => {

    const [goToCart, setToCart] = useState(false);

    const onAdd = (cantidad) => {
        // console.log(`Compraste ${cantidad} unidades`);
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