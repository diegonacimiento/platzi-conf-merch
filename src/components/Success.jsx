import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';

export default function Success() {
    const { state: { orders } } = useContext(AppContext);

    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>{orders[0]?.buyer[0]?.name}, gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">Google Maps</div>
            </div>
        </div>
    )
}
