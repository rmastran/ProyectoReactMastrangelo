import ItemCount from './Nav/ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const pelotas = [
    { id: 1, title: "Pelota 1"},
    { id: 2, title: "Pelota 2"},
    { id: 3, title: "Pelota 3"},
];

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const [dataPelotas, setDataPelotas] = useState([]);

    useEffect(() => {
        const getDataPelotas = new Promise (resolve => {
            setTimeout(() => {
                resolve(pelotas);
            }, 2000);
        });

        getDataPelotas.then(res => setDataPelotas(res));

    }, [])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return (
        <>
            <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList dataPelotas={dataPelotas} />
        </>
    );
}

export default ItemListContainer;