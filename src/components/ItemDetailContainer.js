import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItemPelota } from "../mock/data";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {

    const [dataPelota, setDataPelota] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id }=useParams()

    // useEffect(() => {
    //     getItemPelota(Number(id))
    //     .then((res) => {
    //     setDataPelota(res);
    //     setIsLoading(false);
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(()=> setIsLoading(false))
    // }, [id]);

    useEffect(()=>{
        setIsLoading(true)
        const collectionProd = collection(db, "productos")
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> setDataPelota({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setIsLoading(false))
    },[])

    if(isLoading){
        return <div>Cargando...</div>
    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ItemDetail dataPelota={dataPelota}/>
        </div>
    );
}

export default ItemDetailContainer;