import ItemCount from "./Nav/ItemCount";

const ItemDetail = ({dataPelota}) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return (
        <div>
            <h3>{dataPelota.title}</h3> 
            <img src={dataPelota.img} alt={dataPelota.title}/>
            <p>{dataPelota.description}</p>
            <p>{dataPelota.price}</p>
            <ItemCount initial={1} stock={dataPelota.stock} onAdd={onAdd}/>
        </div>
    );
}

export default ItemDetail;