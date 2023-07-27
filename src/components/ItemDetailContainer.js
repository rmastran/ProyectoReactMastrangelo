import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const pelota = { id: 1, title: "Pelota 5" };

const ItemDetailContainer = () => {

    const [dataPelota, setDataPelota] = useState({});

    useEffect(() => {
        const getDataPelota = new Promise(resolve => {
            setTimeout(() => {
                resolve(pelota);
            }, 2000);
        });

        getDataPelota.then(res => setDataPelota(res));
    }, [])

    return (
        <ItemDetail dataPelota={dataPelota}/>
    );
}

export default ItemDetailContainer;