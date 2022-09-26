import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";

function CartOptions() {
    const { totalPrice } = useContext(CartContext);

    return (
        <div className="CartOptions">
            <p>Costo total: {totalPrice()}</p>
            <Link to={"/canje-de-puntos"}>
                ¡Añadir más productos!
            </Link>
            <Link to={"/"}>
                Terminar pedido
            </Link>
        </div>
    )
}

export default CartOptions;