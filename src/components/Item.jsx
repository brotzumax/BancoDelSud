import React from "react";
import { Link, NavLink } from "react-router-dom";

function Item({ item, onAdd }) {
    return (
        <div className="Item">
            <div className="Contenido">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Valor: {item.price} puntos</p>
                <Link to={`/canje-de-puntos/item/${item.id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;