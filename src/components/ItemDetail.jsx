import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    return (
        <div className="ItemDetail">
            <div className="Detalles">
                <p>{item.name}</p>
                <div className="Detalles-Img">
                    <img src={item.image} alt={item.name} />
                </div>
            </div>
            <div className="Informacion">
                <p>Valor: {item.price} puntos</p>
                <p>Descripción: {item.description}</p>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;