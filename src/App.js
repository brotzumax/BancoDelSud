import './App.css';
import CanjeDePuntos from './components/CanjeDePuntos';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Contenido">
        <NavBar />
        <div className="Main">
          <ItemListContainer usuario="Usuario" />
          <CanjeDePuntos />
        </div>
      </div>
    </div>
  );
}

export default App;
