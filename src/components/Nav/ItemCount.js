import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function ItemCount ({ initial, stock, onAdd }) {
    const [contador, setContador] = useState(parseInt(initial));

    const restar = () => {
        if (contador > 0){
            setContador(contador - 1);
        }   
    }

    const sumar = () => {
        if (contador < stock){
            setContador(contador + 1);
        }
    }

    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial])

    return (
        <div>
            <Button onClick={restar}>-</Button>
            <span>{contador}</span>
            <Button onClick={sumar}>+</Button>
            <div>
                <Button disabled={contador === 0} onClick={() => onAdd(contador)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;