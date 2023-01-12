import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <ItemListContainer greeting="Lucas" iconCart/>
      <Footer/>
    </BrowserRouter>
      
    
  )
}

export default App;
