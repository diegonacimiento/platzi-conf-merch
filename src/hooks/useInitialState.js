import { useState } from "react";
import initialState from "../initialState";

export default function useInitialState() {
    const [state, setState] = useState(initialState);

    function orderCart(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }

    function addToCart(payload) {
        const product = state.cart.find(item => item.id === payload.id);
        if(product) {
            product.amount += payload.amount;
            const cartTemp = state.cart.filter(item => item.id !== payload.id);
            setState({
                ...state,
                cart: [...cartTemp, {...payload, amount: product.amount}].sort(orderCart)
            });
        }
        else {
            setState({
                ...state,
                cart: [...state.cart, {...payload}]
            });
        }
    }

    function removeToCart(payload) {
        if(payload.amount > 1) {
            const cartTemp = state.cart.filter(item => item.id !== payload.id);
            setState({
                ...state,
                cart: [...cartTemp, {...payload, amount: payload.amount - 1}].sort(orderCart)
            });
        }
        else {
            setState({
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            });
        }
        
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
