import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItemPelota } from "../mock/data";

const ItemDetailContainer = () => {

    const [dataPelota, setDataPelota] = useState({});

    useEffect(() => {
        getItemPelota()
        .then((res) => setDataPelota(res))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <ItemDetail dataPelota={dataPelota}/>
        </div>
    );
}

export default ItemDetailContainer;