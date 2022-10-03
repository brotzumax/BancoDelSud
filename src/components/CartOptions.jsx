import { addDoc, collection, getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";

function CartOptions() {
    const { totalPrice } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const { user } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);

    async function GenerateOrder() {
        const order = {
            buyer: { name: user.username, email: user.email },
            items: GenerateItemSimplify(),
            date: new Date(),
            total: totalPrice()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        await addDoc(ordersCollection, order);

        await DescontarStock(db);
        clearCart();

        alert("¡Tus puntos fueron canjeados con exito!");
    }

    function GenerateItemSimplify() {
        let itemsSimplify = [];

        cart.forEach(item => {
            itemsSimplify.push({ id: item.id, title: item.name, quantity: item.cantidad, price: (item.cantidad * item.price) });
        });

        return itemsSimplify;
    }

    async function DescontarStock(db) {
        for (let item of cart) {
            let itemDoc = doc(db, "items", item.id);
            await getDoc(itemDoc).then((snapshot) => {
                updateDoc(itemDoc, { stock: ((snapshot.data().stock) - item.cantidad) });
            });
        }
    }

    return (
        <div className="CartOptions">
            <p>Costo total: {totalPrice()}</p>
            <Link to={"/canje-de-puntos"}>
                ¡Añadir más productos!
            </Link>
            <Link to={"/"} onClick={GenerateOrder}>
                Terminar pedido
            </Link>
        </div>
    )
}

export default CartOptions;