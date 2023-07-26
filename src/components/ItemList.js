import Item from './Item';

const ItemList = ({dataPelotas = []}) => {
    return (
        dataPelotas.map(pelotas => <Item key={pelotas.id} info={pelotas}/>)
    );
}

export default ItemList;