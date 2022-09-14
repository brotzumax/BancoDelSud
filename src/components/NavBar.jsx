import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <Link to={"/"}>
                Inicio
            </Link>
            <Link to={"/"}>
                Transferir ahora
            </Link>
            <Link to={"/"}>
                Blanqueo de PIN
            </Link>
            <Link to={"/"}>
                Tarjetas
            </Link>
            <Link to={"/"}>
                Pagos
            </Link>
            <Link to={"/"}>
                Seguros
            </Link>
            <Link to={"/"}>
                Inversiones
            </Link>
            <Link to={"/canje-de-puntos"}>
                SUD Club
            </Link>
            <Link to={"/"}>
                Turnos en sucursal
            </Link>
        </div>
    )
}

export default NavBar;