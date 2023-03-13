import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

export default function Header() {
    const { state: { cart } } = useContext(AppContext);

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
                { cart.length > 0 && <div className="Header-alert">{ cart.length }</div> }
            </div>
        </div>
    )
}
