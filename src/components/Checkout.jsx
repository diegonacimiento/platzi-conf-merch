import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

export default function Checkout() {
  const { state: { cart }, removeToCart } = useContext(AppContext);

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  }

  const handleRemove = product => () => {
    removeToCart(product);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{ cart.length > 0 ? "Lista de Pedidos:" : "El carrito está vacío." }</h3>
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={ handleRemove(item) }>
              <i className="fas fa-trash-alt" title='Eliminar' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleTotal()}</h3>
          <Link to='/checkout/information'>
            <button type="button">
              Continuar pedido
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
