import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getArticulos = new Promise((resolve) => {
            setTimeout(() => {
                fetch('./productos.json')
                    .then(respuesta => respuesta.json())
                    .then(data => resolve(data))
            }, 2000);
        });

        getArticulos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="ItemListContainer">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;