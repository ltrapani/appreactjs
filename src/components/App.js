import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import Products from './Products';


const App = () => {
  return(
    <>
      <Header/>
      <ItemListContainer greeting="Lucas" iconCart/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App;
