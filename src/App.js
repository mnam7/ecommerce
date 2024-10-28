
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenido a E-ticketing"/>
    </>
  );
}

export default App;
