import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Counter from './Counter';
import '../styles/components/DetailsProduct.css';

export default function DetailsProduct() {
  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);

  const { id } = useParams();

  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const product = products.filter((item) => item.id === id.toString())[0];

  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = () => {
    handleAddToCart({
      ...product,
      amount: counter,
    });
    setCounter(1);
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
      <Counter counter={counter} setCounter={setCounter} />
      <button type="button" onClick={handleAdd} className='bt-add-product'>
        Agregar al carrito
      </button>
    </div>
  );
}
