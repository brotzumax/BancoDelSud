import React from "react";
import ItemCount from "./ItemCount";

function Item({ imagen, nombre, puntosReq }) {
    return (
        <div className="Item">
            <div className="Contenido">
                <img src={imagen} alt={nombre} />
                <p>{nombre}</p>
                <p>Valor: {puntosReq} puntos</p>
                <ItemCount initial={1} stock={5} onAdd={0} />
            </div>
        </div>
    )
}

export default Item;