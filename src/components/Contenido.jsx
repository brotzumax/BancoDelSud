import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import MensajeBienvenida from "./MensajeBienvenida";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";

function Contenido() {
    return (
        <div className="Contenido">
            <NavBar />
            <div className="Main">
                <Routes>
                    <Route exact path="/" element={<MensajeBienvenida />} />
                    <Route exact path="/canje-de-puntos" element={<ItemListContainer />} />
                    <Route exact path="/canje-de-puntos/:category" element={<ItemListContainer />} />
                    <Route exact path="/canje-de-puntos/item/:itemId" element={<ItemDetailContainer />} />
                    <Route exact path="/canje-de-puntos/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    )
}

export default Contenido;