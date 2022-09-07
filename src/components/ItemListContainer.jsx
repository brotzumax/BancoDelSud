import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const articulos = [
            { "id": 1, "Nombre": "Viaje a Miami", "Imagen": "https://dummyimage.com/200x200/000/fff", "Puntos": 3600000 },
            { "id": 1, "Nombre": "LG/TV 65", "Imagen": "https://dummyimage.com/200x200/000/fff", "Puntos": 400000 }
        ];

        const getArticulos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(articulos);
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