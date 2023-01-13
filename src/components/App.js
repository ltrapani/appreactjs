import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
      
    
  )
}

export default App;
