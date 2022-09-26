import './App.css';
import Header from './components/Header';
import MensajeBienvenida from './components/MensajeBienvenida';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Provider from './context/Context';
import Cart from './components/Cart';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="Contenido">
            <NavBar />
            <div className="Main">
              <Routes>
                <Route exact path="/" element={<MensajeBienvenida usuario="Usuario" />} />
                <Route exact path="/canje-de-puntos" element={<ItemListContainer />} />
                <Route exact path="/canje-de-puntos/categoria/:category" element={<ItemListContainer />} />
                <Route exact path="/canje-de-puntos/item/:itemId" element={<ItemDetailContainer />} />
                <Route exact path="/canje-de-puntos/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
