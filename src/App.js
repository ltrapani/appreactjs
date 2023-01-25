import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import CartVerif from './components/CartVerif';
import { CartContext } from './context/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetail/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/category/carrito' element={<CartVerif />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext>
  );
}

export default App