import './App.scss';
import Home from './Pages/Home/Home';
import BootstrapNavbar from './Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import Products from './Pages/Products/Products';
import Product from './Pages/Products/Product';
import SmartSearchProduct from "./Pages/Products/SmartSearchProduct";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <>
      
      <BootstrapNavbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/productdetails/:id" element={<Product/>}/>
        <Route exact path="/product/SmartSearchProduct/:id" element={<SmartSearchProduct/>}/>
      </Routes>
      

     </>
  );
}

export default App;
