import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Importamos PayPalScriptProvider y PayPalButtons:
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

export default function Payment() {
    const { state: { cart, buyer }, addNewOrder, removeAllCart } = useContext(AppContext);

    const navigate = useNavigate();

    // Creamos las siguientes opciones:
    const paypalOtions = {
        clientId: process.env.REACT_APP_CLIENT_ID_PAYPAL, // Aquí va el clientId tuyo
        intent: 'capture',
        currency: 'USD' // Aquí va la moneda que seleccionamos para nuestra app en el dashboard
    }

    // Creamos un objeto que contiene los estilos del botón:
    const buttonStyles = {
        layout: 'vertical', // Si queremos que sea vertical o horizontal
        shape: 'rect' // Si queremos que sea recto 
    }

    // Creamos una función que se ejecuta cuando el pago sale bien:
    const handlePaymentSuccess = (data, actions) => {
        const response = actions.order.capture().then((details) => {
            // Preguntamos si el pago salió bien:
            if (details.status === 'COMPLETED') {
                // Creamos la nuevea orden:
                const newOrder = {
                    buyer,
                    product: cart,
                    payment: details
                };
                // Agregamos la nueva orden en el state:
                addNewOrder(newOrder);
                removeAllCart();
                // Si salió todo bien nos redirijimos a la página success:
                navigate('/checkout/success');
            };
        });
        
        // Retornamos la respuesta (opcional)
        return response;
    }

    // Creamos una función que sume el total a pagar:
    const handleTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const total = cart.reduce(reducer, 0);
        return total;
    }

    // Creamos una función que cree una nueva orden para la API de PayPal:
    const createOrder = (data, actions) => {
        const response = actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: handleTotal(), // Acá va el precio total a pagar
                    },
                },
            ],
        });
        return response; 
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                {cart.length > 0 && (
                    <>
                        <br />
                        <div className="Payment-element">
                            <h3>Total a pagar:</h3>
                            <h4>${handleTotal()}</h4>
                        </div>
                        <br />
                        <div className="Payment-button">
                            {/* Agregamos el provider de paypal y dentro el button de PayPal */}
                            <PayPalScriptProvider>
                                <PayPalButtons
                                    paypalOptions={paypalOtions}
                                    buttonStyles={buttonStyles}
                                    createOrder={(data, actions) => createOrder(data, actions)}
                                    onApprove={(data, actions) => handlePaymentSuccess(data, actions)}
                                    onError={() => navigate('/checkout/payment_error')}
                                    onCancel={() => navigate('/checkout/payment')}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
