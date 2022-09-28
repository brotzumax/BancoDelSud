import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const item = doc(db, "items", itemId);
        getDoc(item).then((snapshot) => {
            setProducto({ id: snapshot.id, ...snapshot.data() });
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