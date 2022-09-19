import React, { useState, createContext } from "react";

export const CartContext = createContext();

function Provider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item, cantidad) {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    }

    function clear() {
        setCart([]);
    }

    function isInCart(id) {
        return cart.some(item => item.id === id);

    }

    function cartTotal() {
        return cart.reduce((total, item) => total += item.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default Provider;