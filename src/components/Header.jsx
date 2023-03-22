import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
    const { state: { cart } } = useContext(AppContext);

    const { isActiveDarkMode, changeMode } = useDarkMode();

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
                <button className='bt-mode' type='button' onClick={changeMode}>
                    { 
                        isActiveDarkMode ? <i className="fa-solid fa-moon"/> : <i className="fa-solid fa-sun" /> 
                    }
                </button>
                <span>
                    <Link to='/checkout'>
                        <i className="fas fa-shopping-basket" title='Carrito' />
                    </Link>
                    {cart.length > 0 && <div className="Header-alert">{cartTotalAmount}</div>}
                </span>
            </div>
        </div>
    )
}
