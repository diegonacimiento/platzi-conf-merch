import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPayment() {
    return (
        <div>
            <h1>Error en el pago</h1>
            <Link to='/checkout/payment'>Intentar de nuevo</Link>
        </div>
    )
}
