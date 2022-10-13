import React from "react";

function Tarjetas() {
    return (
        <div className="Tarjetas">
            <h2>Mis tarjetas</h2>
            <div className="Container">
                <div className="Tarjeta">
                    <div className="Logo">
                        <img src="./images/visa.png" alt="Visa Logo" />
                    </div>
                    <div className="Info">
                        <div>
                            <p>Débito</p>
                            <p>XXXX - 1234</p>
                        </div>
                        <hr />
                        <div>
                            <p>Límite de extracción: $60.000,00</p>
                            <p>Límite de compra: $100.000,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjetas;