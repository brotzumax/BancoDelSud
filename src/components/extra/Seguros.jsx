import React from "react";

function Seguros() {
    return (
        <div className="Seguros">
            <h2>Seguros para vos</h2>
            <hr />
            <h3>Cotizá y conocé nuestra oferta de seguros</h3>
            <div className="TiposSeguros">
                <div>
                    <img src="./images/coche.png" alt="" />
                    <p>Seguro de Auto</p>
                    <p>Compará, elegí y contratá online el seguro de auto más conveniente para vos.</p>
                </div>
                <div>
                    <img src="./images/phone.png" alt="" />
                    <p>Tecnología protegida</p>
                    <p>Protegé tus equipos electrónicos portátiles en caso de robo o daño.</p>
                </div>
            </div>
            <div className="InfoSeguros">
                <p>Si tenés dudas, ¡Contactanos!</p>
                <div className="Contacto">
                    <p>0810-999-9999</p>
                    <p>Lunes a viernes de 8 a 20hs</p>
                </div>
            </div>
        </div>
    )
}

export default Seguros;