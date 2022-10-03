import { useContext } from "react";
import { CartContext } from "../context/Context";
import InicioSesion from "./InicioSesion";
import Contenido from "./Contenido";

function MainPage() {
    const { user } = useContext(CartContext);

    return (
        <div className="MainPage">
            {typeof user === "undefined" ? <InicioSesion /> : <Contenido />}
        </div>
    )
}

export default MainPage;