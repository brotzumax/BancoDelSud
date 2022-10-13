import React from "react";
import { Link } from "react-router-dom";

function CarritoVacio() {
    return (
        <div className="CarritoVacio">
            <div className="MensajeCarritoVacio">
                <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="Carrito Vacio" />
                <p>¡Ups! Tu lista de pedidos está vacía</p>
                <p>Revisa nuestro catálogo de artículos para canjear tus puntos por premios increíbles</p>
                <Link to={"/canje-de-puntos"}>Volver al catálogo</Link>
            </div>
        </div>
    )
}

export default CarritoVacio;