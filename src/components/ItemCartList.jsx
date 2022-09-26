import React from "react";
import ItemCart from "./ItemCart";
import CartOptions from "./CartOptions";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function ItemCartList() {
    const { cart } = useContext(CartContext);

    return (
        <div className="ItemCartList">
            {cart.map(item => (
                <ItemCart key={item.id} item={item} />
            )
            )}
            <CartOptions />
        </div>
    )
}

export default ItemCartList;