import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getDataPelotas } from '../mock/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const [dataPelotas, setDataPelotas] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId}= useParams()
    useEffect(() => {
        setLoading(true)
        getDataPelotas.then(res => {
            if(categoryId){
                setDataPelotas(res.filter((dataPelotas)=> dataPelotas.category === categoryId))
            }else{
                setDataPelotas(res)
            }
        }) 
       .finally(()=> setLoading(false))
    }, [categoryId])

    if (loading){
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