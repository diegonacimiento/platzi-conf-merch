import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

export default function Payment() {
    const { state: { cart } } = useContext(AppContext);

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                { cart.map(item => (
                    <div className="Payment-item" key={ item.id }>
                        <div className="Payment-element">
                            <h4>{ item.title }</h4>
                            <span>${ item.price }</span>
                        </div>
                    </div>
                )) }
                <div className="Payment-button">
                    Boton de pago con Paypal
                </div>
            </div>
        </div>
    )
}
