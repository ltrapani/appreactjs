import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import { CartContext } from './context/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/category/carrito' element={<Checkout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext>
  );
}

export default App