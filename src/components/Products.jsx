import React, { useContext } from 'react';
import TargetProduct from './TargetProduct';
import "../styles/components/Products.css";
import AppContext from "../context/AppContext";

export default function Products() {
    const { state: { products } } = useContext(AppContext);

    return (
        <div className='Products'>
            <div className='Products-items'>
                {
                    products.map((product) => (
                        <TargetProduct 
                            key={product.id} 
                            product={product} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
