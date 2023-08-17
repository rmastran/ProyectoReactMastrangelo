import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);
    console.log(cartArray);
    const addToCart = (dataPelota, cantidad) => {
        console.log(`Agregaste ${dataPelota.title}, ${cantidad} unidades.`);
        const newObject = {
            item: dataPelota,
            cantidad
        }
        setCartArray([...cartArray, newObject]);
    }


   const deleteItem = (id) => {
    const updatedCart = cartArray.filter(element => element.id !== id);
    setCartArray(updatedCart);
   }

   const clearCart = () => {
    setCartArray([]);
   }

   const isInCart = (id) => {
    return cartArray.some(element => element.id === id);
   }

    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart,
        isInCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;