import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

export default function Checkout() {
  const { state: { cart }, removeToCart, addToCart } = useContext(AppContext);

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount);
    const total = cart.reduce(reducer, 0);
    return total;
  }

  const handleRemove = product => () => {
    removeToCart(product);
  }

  const handleAddToCart = product => () => {
    addToCart({ ...product, amount: 1 });
  }

  return (
    <div className="Checkout" data-aos="flip-left">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <>
            <h3>Lista de Pedidos:</h3>
            <div className='Checkout-titles'>
              <h4>Producto</h4>
              <h4>Cantidad</h4>
              <h4>Precio</h4>
            </div>
          </>
        ) : <h3>El carrito está vacío.</h3>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <span>{item.title}</span>
              <span>{item.amount}</span>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" title='Eliminar' />
            </button>
            <button type="button" onClick={handleAddToCart(item)}>
              <i className="fa-solid fa-plus" title='Agregar un producto más' />
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
