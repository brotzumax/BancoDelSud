import React from "react";

function TransferirAhora() {
    return (
        <div className="TransferirAhora">
            <div className="Container">
                <h2>¿A quien le vas a transferir?</h2>
                <p>Desde tu C.A. en Pesos 221-XXXX911-1</p>
                <input type="text" placeholder="Buscá por destinatario o CBU/CVU/Alias" />
                <button>Validar</button>
                <div>
                    <p>Destinatarios:</p>
                    <p>¡No tenés destinatarios!</p>
                </div>
            </div>
        </div>
    )
}

export default TransferirAhora;