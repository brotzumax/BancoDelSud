import React from "react";

function Pagos() {
    return (
        <div className="Pagos">
            <h2>Próximos vencimientos a pagar</h2>
            <div className="Container">
                <div className="Servicios">
                    <img src="./images/factura.png" alt="" />
                    <p>No tenés servicios por vencer</p>
                </div>
                <div className="NuevoPago">
                    <button>Nuevo Pago</button>
                    <button>Límites</button>
                </div>
            </div>
        </div>
    )
}

export default Pagos;