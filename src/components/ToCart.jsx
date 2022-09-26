import React from "react";
import { Link } from "react-router-dom";

function ToCart() {
    return (
        <div className="ToCart">
            <Link to={"/canje-de-puntos"}>
                <button className="btnVolver">Seguir canjeando</button>
            </Link>
            <Link to={"/canje-de-puntos/cart"}>
                <button className="btnDetailCarrito">Al carrito</button>
            </Link>
        </div>
    )
}

export default ToCart;