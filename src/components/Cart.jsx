import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import ItemCartList from "./ItemCartList";
import CarritoVacio from "./CarritoVacio";

function Cart() {
    const { cartTotal } = useContext(CartContext);

    return (
        <div className="Cart">
            {cartTotal() === 0 ? <CarritoVacio /> : <ItemCartList />}
            
        </div>
    );
}

export default Cart;