import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";


function ItemListContainer() {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [itemsCategoria, setItemsCategoria] = useState([]);

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
            setItemsCategoria(respuesta);
        });
    }, []);

    useEffect(() => {
        if (typeof category != "undefined") {
            setItemsCategoria(items.filter(producto => producto.category === category));
        }
    }, [category]);

    return (
        <div className="ItemListContainer">
            <h2>Sistema de canje de puntos</h2>
            <div className="Categorias">
                <Link to={`/canje-de-puntos`}>
                    <button className="btnTodos" onClick={() => { setItemsCategoria(items) }}>Todos</button>
                </Link>
                <Link to={`/canje-de-puntos/categoria/Viajes`}><button className="btnViajes">Viajes</button></Link>
                <Link to={`/canje-de-puntos/categoria/Electronica`}><button className="btnElectronica">Electronica</button></Link>
            </div>
            <ItemList items={itemsCategoria} />
        </div>
    )
}

export default ItemListContainer;