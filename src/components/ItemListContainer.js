import ItemCount from './Nav/ItemCount';

const ItemListContainer = ({greeting = "Ofertas"}) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return (
        <>
            <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;