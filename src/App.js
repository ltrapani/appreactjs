import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App