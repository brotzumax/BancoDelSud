import React from "react";
import { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

function CanjeDePuntos() {
    const [productoSeleccionado, setProductoSeleccionado] = useState({});

    return (
        <div className="CanjeDePuntos">
            <h2>Sistema de canje de puntos</h2>
            <ItemListContainer onAdd={setProductoSeleccionado} />
            <ItemDetailContainer item={productoSeleccionado} />
        </div>
    )
}

export default CanjeDePuntos;