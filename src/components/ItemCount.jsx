import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ItemCount({ stock, onAdd }) {
    const [cantidad, setCantidad] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    function decrementarCantidad(valor) {
        if (valor >= 0) {
            setCantidad(valor);
        }
    }

    function incrementarCantidad(valor) {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    function agregarProductos() {
        if (cantidad <= itemStock) {
            onAdd(cantidad);
            setItemStock(itemStock - cantidad);
            setCantidad(itemStock - cantidad);
        }
    }
    return (
        <div className="ItemCount">
            <div className="inputs">
                <button onClick={() => { decrementarCantidad(cantidad - 1) }}>-</button>
                <input type="text" value={cantidad} onChange={() => { }} />
                <button onClick={() => { incrementarCantidad(cantidad + 1) }}>+</button>
            </div>
            <button className="addProduct" onClick={() => { agregarProductos() }}>Agregar productos</button>
        </div>
    )
}

export default ItemCount;