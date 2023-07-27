import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Nav/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
       <NavBar/>
       <ItemListContainer/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
