import Item from './Item';

const ItemList = ({dataPelotas = []}) => {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {dataPelotas.map(pelotas => <Item key={pelotas.id} info={pelotas}/>)}
        </div>
        
    );
}

export default ItemList;