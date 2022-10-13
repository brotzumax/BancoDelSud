import React from "react";

function BlanqueoDePin() {
    return (
        <div className="BlanqueoDePin">
            <div className="Container">
                <div className="Info">
                    <p>¿Querés habilitar tu Tarjeta de Débito?</p>
                    <p>¿Olvidaste tu PIN?</p>
                    <p>Confirmá y creá uno nuevo</p>
                    <p>Blanqueo de mi <span>Visa Debito xxxx - 1234</span></p>
                </div>
                <div>
                    <p>
                        Una vez realizado el blanqueo deberás acercarte con tu tarjeta de débito a un cajero automático dentro de las próximas 24 horas para elegir una nueva clave.
                    </p>
                    <hr />
                    <p>
                        Recordá que transcurrido este plazo, si no ingresaste tu nueva clave tendrás que repetir la operación.
                    </p>
                </div>
                <button>Continuar</button>
            </div>
        </div>
    )
}

export default BlanqueoDePin;