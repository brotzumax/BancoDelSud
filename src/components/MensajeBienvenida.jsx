import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function MensajeBienvenida() {
    const { CloseSession } = useContext(CartContext);
    const { user } = useContext(CartContext);

    let date = new Date();
    let fechaActual = date.getDate() + "/" + (date.getMonth() + 1);

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
            <hr />
            <div className="Container">
                <p>$38.980,56</p>
                <div className="InfoCuentas">
                    <span>Saldo total en tus cuentas al {fechaActual}</span>
                    <button>Ver Cuentas</button>
                </div>


                <div className="MasDetalles">
                    <div>
                        <p>Tenés 1 Cuenta</p>
                        <p>↴</p>
                    </div>
                    <div>
                        <p>Últimos movimientos de tu Caja de Ahorro en pesos 221-9999999-1</p>
                        <p>↴</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MensajeBienvenida;