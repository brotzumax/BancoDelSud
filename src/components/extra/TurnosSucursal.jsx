import React from "react";

function TurnosSucursal() {
    return (
        <div className="TurnosSucursal">
            <h2>Completá tus datos</h2>
            <div className="Container">
                <p>Número de documento</p>
                <input type="text" />
                <p>Nombre completo</p>
                <input type="text" />
                <p>Apellido completo</p>
                <input type="text" />
                <p>Sexo</p>
                <select>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <p>Email</p>
                <input type="text" />
                <p>Teléfono</p>
                <input type="text" />
                <div>
                    <button>Continuar</button>
                </div>
            </div>
        </div>
    )
}

export default TurnosSucursal;