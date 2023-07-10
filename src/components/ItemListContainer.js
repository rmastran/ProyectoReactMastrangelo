const ItemListContainer = ({greeting = "Ofertas"}) => {
    return (
        <h2 style={{backgroundColor: "coral", textAlign: "center"}}>{greeting}</h2>
    );
}

export default ItemListContainer;