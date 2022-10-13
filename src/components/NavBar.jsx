import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <Link to={"/"}>
                Inicio
            </Link>
            <Link to={"/transferir-ahora"}>
                Transferir ahora
            </Link>
            <Link to={"/blanqueo-de-pin"}>
                Blanqueo de PIN
            </Link>
            <Link to={"/tarjetas"}>
                Tarjetas
            </Link>
            <Link to={"/pagos"}>
                Pagos
            </Link>
            <Link to={"/seguros"}>
                Seguros
            </Link>
            <Link to={"/inversiones"}>
                Inversiones
            </Link>
            <Link to={"/canje-de-puntos"}>
                SUD Club
            </Link>
            <Link to={"/turnos-en-sucursal"}>
                Turnos en sucursal
            </Link>
        </div>
    )
}

export default NavBar;