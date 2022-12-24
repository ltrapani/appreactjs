import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';

const App = () => {
  return(
    <>
      <Header/>
      <ItemListContainer greeting="Lucas" iconCart/>
      <Footer/>
    </>
  )
}

export default App;
