import React from "react";
import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    function decrementarCantidad(valor) {
        if (valor >= 0) {
            setCantidad(valor);
        }
    }

    function incrementarCantidad(valor) {
        if ((valor) <= itemStock) {
            setCantidad(valor);
        }
    }

    function agregarProductos() {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }
    return (
        <div className="ItemCount">
            <div className="inputs">
                <button onClick={() => { incrementarCantidad(cantidad + 1) }}>+</button>
                <input type="text" value={cantidad} onChange={() => { }} />
                <button onClick={() => { decrementarCantidad(cantidad - 1) }}>-</button>
            </div>
            <button className="addProduct" onClick={() => { agregarProductos() }}>Agregar productos</button>
        </div>
    )
}

export default ItemCount;