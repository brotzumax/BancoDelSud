import React from "react";

function Item({ item, onAdd }) {
    return (
        <div className="Item">
            <div className="Contenido">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Valor: {item.price} puntos</p>
                <button onClick={() => { onAdd( item ) }}>Ver detalle</button>
            </div>
        </div>
    )
}

export default Item;