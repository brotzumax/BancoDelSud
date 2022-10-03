import React, { useState, createContext } from "react";

export const CartContext = createContext();

function Provider({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(undefined);

    function addItem(item, cantidad) {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    }

    function clearCart() {
        setCart([]);
    }

    function isInCart(id) {
        return cart.some(item => item.id === id);

    }

    function cartTotal() {
        return cart.reduce((total, item) => total += item.cantidad, 0);
    }

    function removeItem(id) {
        let index;
        cart.forEach(item => {
            if(item.id === id){
                index = cart.indexOf(item);
            }
        });
        cart.splice(index, 1);
        setCart([...cart]);
    }

    function totalPrice(){
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += (item.price * item.cantidad);
        });

        return totalPrice;
    }

    function newUser(usuario, email, password){
        setUser({username: usuario, email: email, password: password});
    }

    function CloseSession(){
        setUser(undefined);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, cartTotal, removeItem, totalPrice, newUser, user, CloseSession }}>
            {children}
        </CartContext.Provider>
    );
}

export default Provider;