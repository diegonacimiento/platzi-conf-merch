import React, { useContext, useState } from 'react';
import TargetProduct from './TargetProduct';
import "../styles/components/Products.css";
import AppContext from "../context/AppContext";
import SelectProduct from './SelectProduct';

export default function Products() {
    const { state: { products }, addToCart } = useContext(AppContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    }

    const [dataProduct, setDataProduct] = useState('');

    const onOpenProduct = (data) => {
        const divProduct = document.querySelector('.Select-Product');
        divProduct.setAttribute('style', 'display: flex');
        setDataProduct(data);
    };

    return (
        <div className='Products'>
            <div className='Products-items'>
                {
                    products.map((product) => (
                        <TargetProduct 
                        key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart} 
                        onOpenProduct={onOpenProduct}
                        />
                    ))
                }
            </div>
            <SelectProduct dataProduct={dataProduct} handleAddToCart={handleAddToCart} />
        </div>
    )
}
