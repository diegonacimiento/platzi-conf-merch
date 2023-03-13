import React, { useContext } from 'react';
import TargetProduct from './TargetProduct';
import "../styles/components/Products.css";
import AppContext from "../context/AppContext";

export default function Products() {
    const { state: { products }, addToCart } = useContext(AppContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    }

    return (
        <div className='Products'>
            <div className='Products-items'>
                {
                    products.map((product) => (
                        <TargetProduct key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    ))
                }
            </div>
        </div>
    )
}
