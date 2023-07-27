import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getDataPelotas } from '../mock/data';

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const [dataPelotas, setDataPelotas] = useState([]);

    useEffect(() => {
        
        getDataPelotas.then(res => setDataPelotas(res));

    }, [])

    return (
        <div className='d-flex flex-column align-items-center'>
            <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting}</h2>
            <ItemList dataPelotas={dataPelotas} />
        </div>
            
    );
}

export default ItemListContainer;