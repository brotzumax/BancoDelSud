import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function MensajeBienvenida() {
    const { CloseSession } = useContext(CartContext);
    const { user } = useContext(CartContext);

    function CerrarSesion() {
        CloseSession();
    }
    return (
        <div className="MensajeBienvenida">
            <p>
                Bienvenido {user.username}
            </p>
            <p>
                ¿No es usted?<button onClick={CerrarSesion}>Cerrar sesión</button>
            </p>
        </div>
    )
}

export default MensajeBienvenida;