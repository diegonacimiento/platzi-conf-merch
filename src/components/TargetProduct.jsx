import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TargetProduct({ product }) {
  const navigate = useNavigate();

  const container = useRef();

  const handleProduct = () => {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="Products-item" ref={container}>
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> ${product.price}</span>
        </h2>
      </div>
      <button type="button" onClick={handleProduct}>
        Ver producto
      </button>
      
    </div>
  );
}
