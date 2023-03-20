import React, { useRef, useState } from 'react';
import Contador from './Contador';

export default function TargetProduct({ product, handleAddToCart }) {

    const container = useRef();
    const [buttonView, setButtonView] = useState(false);
    const [contador, setContador] = useState(0);

    const handleAdd = () => {
        handleAddToCart({
            ...product,
            amount: contador, 
        });
        setContador(0);
        container.current.removeAttribute('style');
        setButtonView(false);
    }

    const handleProduct = () => {
        if (!buttonView) {
            const style = `
            width: 290px;
            height: 500px;
            box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.2), 1px 3px 8px rgba(39, 44, 49, 0.1);
    `
            container.current.setAttribute('style', style);

            setButtonView(true);
        } else {
            container.current.removeAttribute('style');
            setButtonView(false);
        }
    }

    return (
        <div className='Products-item' ref={container}>
            <img
                src={product.image}
                alt={product.title} />
            <div className='Product-item-info'>
                <h2>
                    {product.title}
                    <span>
                        {" "} ${product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type='button' onClick={handleProduct}>{
                !buttonView ? 'Ver' : 'Cerrar' 
            }</button>
            <Contador contador={contador} setContador={setContador} />
            <button id='bt-size-img' type='button' onClick={handleAdd} >Agregar al carrito</button>
        </div>

    )
}
