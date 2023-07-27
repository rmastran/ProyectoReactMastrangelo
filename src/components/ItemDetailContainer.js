import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItemPelota } from "../mock/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [dataPelota, setDataPelota] = useState({});
    const { id }=useParams()
    useEffect(() => {
        getItemPelota(id)
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