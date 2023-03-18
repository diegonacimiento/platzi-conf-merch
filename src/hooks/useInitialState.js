import { useState } from "react";
import initialState from "../initialState";

export default function useInitialState() {
    const [state, setState] = useState(initialState);

    function addToCart(payload) {
        setState({
            ...state,
            cart: [...state.cart, {...payload, id: payload.id + Math.random()}]
        });
    }

    function removeToCart(payload) {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        });
    }

    function addToBuyer(payload) {
        setState({
            ...state,
            buyer: [payload],
        });
    }

    function addNewOrder(payload) {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    }

    function removeAllCart() {
        setState({
            ...state,
            cart: [],
        })
    }
    
    return {
        state,
        addToCart,
        removeToCart,
        addToBuyer,
        addNewOrder,
        removeAllCart,
    };
}
