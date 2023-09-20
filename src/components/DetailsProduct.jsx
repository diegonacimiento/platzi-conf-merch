import React, { useContext, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Counter from './Counter';
import '../styles/components/DetailsProduct.css';

export default function DetailsProduct() {
  const navigate = useNavigate();

  const containerBuy = useRef(null);
  const msgAdded = useRef(null);

  const [counter, setCounter] = useState(1);
  const [buy, setBuy] = useState(false);

  const { id } = useParams();

  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);
  
  const product = products.filter((item) => item.id === id.toString())[0];

  const handleRedirectCart = () => {
    navigate("/checkout");
  }

  const handleBack = () => {
    navigate(-1);
  };

  const updateScrollFocus = () => {
    const footer = document.querySelector('.Footer');
    setTimeout(() => {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleAddMsg = (value) => {
    if (value) {
      msgAdded.current.setAttribute('style', 'height: 180px');
    } else {
      msgAdded.current.removeAttribute('style');
    }
  };

  const handleBuy = () => {
    setBuy((prev) => !prev);
    if (!buy) {
      containerBuy.current.setAttribute('style', 'height: 200px');
      handleAddMsg(false);
      updateScrollFocus();
    } else {
      containerBuy.current.removeAttribute('style');
    }
  };

  const handleAdd = () => {
    addToCart({
      ...product,
      amount: counter,
    });
    setCounter(1);
    handleAddMsg(true);
    handleBuy();
  };

  return (
    <div className="container-product" data-aos="zoom-in">
      <button title="Volver hacia atrás" type="button" onClick={handleBack}>
        <i className="fa-solid fa-arrow-left" style={{ color: '#ffffff;' }} />{' '}
        Volver
      </button>
      <h2>{product.title}</h2>
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <h3>$ {product.price}</h3>
      <p>{product.description}</p>

      <div className="msg-added" ref={msgAdded}>
        <p>Agregado al carrito</p>
        <i className="fa-solid fa-check" />
        <button title="Ir al carrito" type="button" onClick={handleRedirectCart}>
          Ir al carrito
        </button>
        <p> ¿Quiere comprar más productos?</p>
      </div>

      <button
        title="Comprar producto"
        type="button"
        className="Product-bt-buy"
        onClick={handleBuy}
      >
        {buy ? 'Cerrar' : 'Comprar'}
      </button>
      <div className="container-buy" ref={containerBuy}>
        <h3>Cantidad</h3>
        <Counter counter={counter} setCounter={setCounter} />
        <button type="button" onClick={handleAdd} className="bt-add-product">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
