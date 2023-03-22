import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPayment() {
    const linkStyle = {
        fontSize: '20px',
        color: 'var(--color)',
        textDecoration: 'underline',
    }
    return (
        <div>
            <h1>Error en el pago</h1>
            <p>
                Lo sentimos, ha ocurrido algún error con el pago. 
                <br /> <br />
                Intente otra vez siguiendo el link de aquí abajo.
            </p>
            <Link to='/checkout/payment' style={linkStyle}>Intentar de nuevo</Link>
        </div>
    )
}
