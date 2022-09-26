import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function ItemCart({ item }) {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="ItemCart">
            <div>
                <p className="NombreProducto">{item.name}</p>
                <p>Cantidad: {item.cantidad} | Valor: {(item.price * item.cantidad)}</p>
            </div>
            <div>
                <button onClick={() => {removeItem(item.id)}}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;