import { createContext, useState } from "react";
import { collection, updateDoc, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

    const getCart = () => {
        return new Promise((resolve, reject) => {
            const coleccionProductos = collection(db, "productos")
            getDocs(coleccionProductos)
            .then((res)=> {
                const products = res.docs.map((product)=>{
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                
                getDocs(collection(db, "cart"))
                .then((res)=> {
                    const cart = res.docs.map((cart)=>{
                        return {
                            id: cart.id,
                            cantidad: cart.data().stock
                        }
                    })

                    cart.forEach(cartItem => {
                        const product = products.find(_product => _product.id === cartItem.id);
                        if (!product) {
                            return;
                        }
                        
                        if (!isInCart(product.id)) {
                            addToCart(product, cartItem.cantidad, true);
                        }
                    });
                    resolve();
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                })
            })
            .catch((error) => {
                console.log(error);
                reject();
            })
        });
    }

    const addToCart = (item, cantidad, auto) => {

        setDoc(doc(db, "cart", item.id), { stock: parseInt(cantidad) })
        .then(() => {
            console.log("Agregado al Carrito.");
        })
        .catch((error) => {
            console.error("Error al agregar al carrito en Firestore:", error);
        });

        //resto lógica para actualizar carrito
        const updatedCart = cartArray.filter((_item) => _item.id !== item.id);
        const newObject = {
            ...item,
            cantidad: parseInt(cantidad)
        }
        setCartArray([...updatedCart, newObject])
    }

   const clearCart = () => {
    cartArray.forEach(cartItem => {
        deleteDoc(doc(db, "cart", cartItem.id))
        .then(() => {
            console.log("Carrito Vaciado.");
        })
        .catch((error) => {
            console.error("Error al agregar al carrito en Firestore:", error);
        });
    });
    setCartArray([]);
   }

   const isInCart = (id) => {
    return cartArray.some((item) => item.id === id);
   }

    const deleteItem = (id) => {
        deleteDoc(doc(db, "cart", id))
        .then(() => {
            const updatedCart = cartArray.filter((item) => item.id !== id);
            setCartArray(updatedCart);
        })
        .catch((error) => {
            console.error("Error al agregar al carrito en Firestore:", error);
        });
    }

   const cartQuantity = () => {

    return cartArray.reduce((acc, item)=> acc + item.cantidad, 0)
   }

   const total = () => {
    return cartArray.reduce((acc, item)=> acc + item.cantidad * item.price, 0)
   }

    return (
        <CartContext.Provider value={{cartArray, isInCart, addToCart, getCart, clearCart, deleteItem, cartQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;