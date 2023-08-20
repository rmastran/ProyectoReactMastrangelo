import { useEffect, useContext, useState } from "react";
import ItemCount from "../Nav/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({dataPelota}) => {

    const [goToCart, setToCart] = useState(false);
    //const [isLoading, setIsLoading] = useState(true);

    const { cartArray, getCart, addToCart, isInCart } = useContext(CartContext);
    const cantidad = cartArray.find(cartItem => cartItem.id === dataPelota.id)?.cantidad ?? 0;

    const onAdd = (cantidad) => {
        addToCart(dataPelota, cantidad, false);
        setToCart(true);
    }

    useEffect(() => {
        //setIsLoading(true);
        getCart()
            .then(_result => {
                //setIsLoading(false);
                setToCart(isInCart(dataPelota.id));
            })
    }, [cartArray])

    //if(isLoading){
        //return <div>Cargando...</div>
    //}

    return (
        <div>
            <h3 style={{textAlign: "center"}}>{dataPelota.title}</h3> 
            <img src={dataPelota.img} alt={dataPelota.title}/>
            <p style={{textAlign: "center"}}>{dataPelota.description}</p>
            <p style={{textAlign: "center"}}>${dataPelota.price}</p>

            <div style={{textAlign: "center"}}>Stock: { dataPelota.stock <= 0 ? "¡No hay Stock!" : dataPelota.stock }</div>
            <ItemCount initial={cantidad} stock={dataPelota.stock} onAdd={onAdd}/>
            {
                goToCart && <Link className="btn btn-dark btn-success" to='/cart' style={{width: "100%", margin: "20px 0 0 0"}}>Ir al carrito</Link>
            }
        </div>
    );
}

export default ItemDetail;