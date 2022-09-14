import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom";

function ItemDetailContainer() {
    const {itemId} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
                fetch('/productos.json')
                    .then(respuesta => respuesta.json())
                    .then(data => resolve(data.find(articulo => articulo.id === parseInt(itemId))))
        });

        getProducto.then((respuesta) => {
            setProducto(respuesta);
        });
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <h3>Detalles del producto</h3>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer;