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
            buyer: [...state.buyer, payload],
        });
    }
    
    return {
        state,
        addToCart,
        removeToCart,
        addToBuyer
    };
}
