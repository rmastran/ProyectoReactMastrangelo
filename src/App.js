import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Nav/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos!'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoría:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>;
       </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
