import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import ToCart from "./ToCart";

function ItemDetail({ item }) {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    function onAdd(counter) {
        setCounter(counter);
        addItem(item, counter);
    }
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
                {counter === 0 ? <ItemCount stock={item.stock} onAdd={onAdd} /> : <ToCart />}
            </div>
        </div>
    )
}

export default ItemDetail;