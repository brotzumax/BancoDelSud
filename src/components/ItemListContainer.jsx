import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import PantallaDeCarga from "./PantallaDeCarga";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


function ItemListContainer() {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const { cartTotal } = useContext(CartContext);

    function GoToCart() {
        if (cartTotal() > 0) {
            return (
                <Link to={"/canje-de-puntos/cart"}>
                    <span>{cartTotal()}</span>
                    <span>Mis pedidos</span>
                </Link>
            )
        }
    }

    function CargarListaDeItems() {
        return (
            <div>
                <div className="ItemListContainerTittle">
                    <h2>Sistema de canje de puntos</h2>
                    {GoToCart()}
                </div>
                <div className="Categorias">
                    <Link to={`/canje-de-puntos`}>
                        <button className="btnTodos">Todos</button>
                    </Link>
                    <Link to={`/canje-de-puntos/Viajes`}><button className="btnViajes">Viajes</button></Link>
                    <Link to={`/canje-de-puntos/Electronica`}><button className="btnElectronica">Electronica</button></Link>
                    <Link to={`/canje-de-puntos/Varios`}><button className="btnVarios">Varios</button></Link>
                </div>
                <ItemList items={items} />
            </div>
        )
    }

    function SolicitarItems() {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot => {
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }));
    }

    useEffect(() => {
        SolicitarItems();
    }, []);

    useEffect(() => {
        if (typeof category != "undefined") {
            const db = getFirestore();
            const q = query(collection(db, "items"), where("category", "==", category));
            getDocs(q).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
        } else {
            SolicitarItems();
        }
    }, [category]);

    return (
        <div className="ItemListContainer">
            {items.length < 1 ? <PantallaDeCarga /> : CargarListaDeItems()}
        </div>
    )
}

export default ItemListContainer;