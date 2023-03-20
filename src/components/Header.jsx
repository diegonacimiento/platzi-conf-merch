import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

export default function Header() {
    const { state: { cart } } = useContext(AppContext);

    const handleTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
        const total = cart.reduce(reducer, 0);
        return total;
    }

    const cartTotalAmount = handleTotal();

    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket" title='Carrito' />
                </Link>
                { cart.length > 0 && <div className="Header-alert">{ cartTotalAmount }</div> }
            </div>
        </div>
    )
}
