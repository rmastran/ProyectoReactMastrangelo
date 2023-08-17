import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

    const addToCart = (dataPelota, cantidad) => {
        if (isInCart(dataPelota.id)) {
            setCartArray(cartArray.map((product)=>{
                if(product.id === dataPelota.item.id){
                    return {...product, cantidad: product.cantidad + cantidad}
                } else {
                    return product
                }
            }))
        } else {
            console.log(`Agregaste ${dataPelota.title}, ${cantidad} unidades.`);
            const newObject = {
                item: dataPelota,
                cantidad
        }
            setCartArray([...cartArray, newObject])
            }
    }

   const clearCart = () => {
    setCartArray([]);
   }

   const isInCart = (id) => {
    return cartArray.some((item) => item.id === id);
   }

   const deleteItem = (id) => {
    const updatedCart = cartArray.filter((item) => item.id !== id);
    setCartArray(updatedCart);
   }

   const cartQuantity = () => {
    return cartArray.reduce((acc, item)=> acc + item.cantidad, 0)
   }

   const total = () => {
    return cartArray.reduce((acc, item)=> acc + item.cantidad * item.price, 0)
   }

    return (
        <CartContext.Provider value={{cartArray, addToCart, clearCart, deleteItem, cartQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;