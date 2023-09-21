import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const { isActiveDarkMode, changeMode } = useDarkMode();

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.amount;
    const total = cart.reduce(reducer, 0);
    return total;
  };

  const cartTotalAmount = handleTotal();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="Header">
      <button
        title="Ir a inicio"
        type="button"
        onClick={handleHome}
        className="Header-bt-icon"
      >
        <div className="Header-container-icon">
          <img
            className="Header-icon"
            src="https://i.imgur.com/E9KmIHz.png"
            alt="Platzi Conf Merch"
          />
        </div>
      </button>
      <div className="Header-checkout">
        <button
          title="Cambiar tema"
          className="bt-mode"
          type="button"
          onClick={changeMode}
        >
          {isActiveDarkMode ? (
            <i className="fa-solid fa-moon" />
          ) : (
            <i className="fa-solid fa-sun" />
          )}
        </button>
        <span>
          <Link to="/checkout">
            <i className="fas fa-shopping-basket" title="Carrito" />
          </Link>
          {cart.length > 0 && (
            <div className="Header-alert">{cartTotalAmount}</div>
          )}
        </span>
      </div>
    </div>
  );
}
