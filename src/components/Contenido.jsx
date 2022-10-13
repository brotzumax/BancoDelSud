import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import MensajeBienvenida from "./MensajeBienvenida";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import TransferirAhora from "./extra/TransferirAhora";
import BlanqueoDePin from "./extra/BlanqueoDePin";
import Tarjetas from "./extra/Tarjetas";
import Pagos from "./extra/Pagos";
import Seguros from "./extra/Seguros";
import Inversiones from "./extra/Inversiones";
import TurnosSucursal from "./extra/TurnosSucursal";

function Contenido() {
    return (
        <div className="Contenido">
            <NavBar />
            <div className="Main">
                <Routes>
                    <Route exact path="/" element={<MensajeBienvenida />} />
                    <Route exact path="/transferir-ahora" element={<TransferirAhora />} />
                    <Route exact path="/blanqueo-de-pin" element={<BlanqueoDePin />} />
                    <Route exact path="/tarjetas" element={<Tarjetas />} />
                    <Route exact path="/pagos" element={<Pagos />} />
                    <Route exact path="/seguros" element={<Seguros />} />
                    <Route exact path="/inversiones" element={<Inversiones />} />
                    <Route exact path="/turnos-en-sucursal" element={<TurnosSucursal />} />
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