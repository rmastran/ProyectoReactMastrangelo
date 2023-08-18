import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Nav/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';
import React, {useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import { pelotas } from './mock/data';
import Checkout from './components/Checkout/Checkout';

function App() {
  // useEffect(()=>{
  //   const coleccionProductos = collection(db, 'productos')
  //   pelotas.map((item)=> addDoc(coleccionProductos, item))
  // },[])
  return (
    <CartProvider>
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos!'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoría:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
       </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
