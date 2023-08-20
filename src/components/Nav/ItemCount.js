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
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 10}}>
            <Button onClick={restar}>-</Button>
            <span style={{padding: "10px"}}>{contador}</span>
            <Button onClick={sumar}>+</Button>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Button disabled={contador === 0} onClick={() => onAdd(contador)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;