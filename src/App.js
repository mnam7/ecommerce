
import './App.css';
import Navbar from './components/layouts/navbar/Navbar';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/pages/cart/Cart';
import {Routes,Route}from "react-router-dom";
import ItemDetail from './components/pages/itemDetail/ItemDetail';

function App() {

  

  return (
  
    <>
    <Navbar/>
    
    <Routes>
     <Route path="/" element={<ItemListContainer/>} /> 
     <Route path="/category/:name" element={<ItemListContainer/>} />   
     <Route path="/cart" element={<Cart/>} />
     <Route path="/ItemDetail/:id" element={<ItemDetail/>}/>
    </Routes>
    
    {/*<ItemListContainer greeting="Bienvenido a E-ticketing"/>*/}
    
    </>
   
  );
}

export default App;
