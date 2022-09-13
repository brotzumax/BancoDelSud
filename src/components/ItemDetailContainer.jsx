import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ item }) {
    const [producto, setProducto] = useState(item);

    useEffect(() => {
        setProducto(item);
    }, [item])

    return (
        <div className="ItemDetailContainer">
            <h3>Detalles del producto</h3>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer;