import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItemPelota } from "../mock/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [dataPelota, setDataPelota] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id }=useParams()

    useEffect(() => {
        getItemPelota(Number(id))
        .then((res) => {
        setDataPelota(res);
        setIsLoading(false);
        })
        .catch((error) => console.log(error))
        .finally(()=> setIsLoading(false))
    }, [id]);

    if(isLoading){
        return <div>Cargando...</div>
    }
    return (
        <div>
            <ItemDetail dataPelota={dataPelota}/>
        </div>
    );
}

export default ItemDetailContainer;