import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

export default function Payment() {
  const {
    state: { cart, buyer },
    addNewOrder,
    removeAllCart,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const paypalOtions = {
    clientId: process.env.REACT_APP_CLIENT_ID_PAYPAL,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data, actions) => {
    const response = actions.order.capture().then((details) => {
      if (details.status === 'COMPLETED') {
        const newOrder = {
          buyer,
          product: cart,
          payment: details,
        };
        addNewOrder(newOrder);
        removeAllCart();
        navigate('/checkout/success');
      }
    });

    return response;
  };

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.amount;
    const total = cart.reduce(reducer, 0);
    return total;
  };

  const createOrder = (data, actions) => {
    const response = actions.order.create({
      purchase_units: [
        {
          amount: {
            value: handleTotal(),
          },
        },
      ],
    });
    return response;
  };

  return (
    <div className="Payment" data-aos="flip-down">
      <div className="Payment-content">
        {cart.length > 0 && (
          <>
            <h3>Resumen del pedido:</h3>
            <div className="Payment-titles">
              <h4>Producto</h4>
              <h4>Cantidad</h4>
              <h4>Precio</h4>
            </div>
            {cart.map((item) => (
              <div className="Payment-item" key={item.id}>
                <div className="Payment-elements">
                  <div className="Payment-element">
                    <span>{item.title}</span>
                    <span>{item.amount}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
            <br />
            <div className="Payment-elements">
              <h3>Total a pagar: ${handleTotal()}</h3>
            </div>
            <br />
            <div className="Payment-button">
              <PayPalScriptProvider>
                <PayPalButtons
                  paypalOptions={paypalOtions}
                  buttonStyles={buttonStyles}
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) =>
                    handlePaymentSuccess(data, actions)
                  }
                  onError={() => navigate('/checkout/payment_error')}
                  onCancel={() => navigate('/checkout/payment')}
                />
              </PayPalScriptProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
