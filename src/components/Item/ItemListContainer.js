import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const [dataPelotas, setDataPelotas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoryId}= useParams()

    // useEffect(() => {

    //     getDataPelotas.then(res => {
    //         if(categoryId){
    //             setDataPelotas(res.filter((dataPelotas)=> dataPelotas.category === categoryId))
    //         }else{
    //             setDataPelotas(res)
    //         }
    //     }) 
    // }, [categoryId])

    useEffect(()=> {
        setIsLoading(true)
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos") //query(collection(db, "productos"), orderBy("title"))
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setDataPelotas(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setIsLoading(false))
    },[categoryId])

    if(isLoading){
        return <div>Cargando...</div>
    }
    return (
        <div className='d-flex flex-column align-items-center'>         
            <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting} <span>{categoryId && categoryId}</span></h2>
            <ItemList dataPelotas={dataPelotas} />              
        </div>
                
    );
    
}

export default ItemListContainer;