import React from 'react'

export default function TargetProduct({ product, handleAddToCart }) {
    const handleAdd = () => {
        handleAddToCart(product);
    }
    
    return (
        <div className='Products-item'>
            <img src={product.image} alt={product.title} />
            <div className='Product-item-info'>
                <h2>
                    {product.title}
                    <span>
                        {" "} ${product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type='button' onClick={ handleAdd }>Comprar</button>
        </div>
    )
}
