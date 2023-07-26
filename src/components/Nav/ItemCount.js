import { useEffect, useState } from "react";

function ItemCount ({ initial, stock, onAdd }) {
    const [contador, setContador] = useState(parseInt(initial));

    const restar = () => {
        setContador(contador - 1);
    }

    const sumar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial])

    return (
        <div>
            <button disabled={contador <=1} onClick={restar}>-</button>
            <span>{contador}</span>
            <button disabled={contador >=stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;