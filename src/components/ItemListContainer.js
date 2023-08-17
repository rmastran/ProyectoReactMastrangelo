import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getDataPelotas } from '../mock/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const [dataPelotas, setDataPelotas] = useState([]);
    const {categoryId}= useParams()

    useEffect(() => {

        getDataPelotas.then(res => {
            if(categoryId){
                setDataPelotas(res.filter((dataPelotas)=> dataPelotas.category === categoryId))
            }else{
                setDataPelotas(res)
            }
        }) 
    }, [categoryId])

    return (
        <div className='d-flex flex-column align-items-center'>
            {  dataPelotas.length === 0 
            ?
            <h1>Cargando..</h1>
            :
            <>
            <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting} <span>{categoryId && categoryId}</span></h2>
            <ItemList dataPelotas={dataPelotas} />
            </>
            
            }
            
        </div>
                
    );
    
}

export default ItemListContainer;