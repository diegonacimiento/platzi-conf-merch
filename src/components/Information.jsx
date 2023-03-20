import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useRef } from 'react';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';

export default function Information() {
    const { addToBuyer } = useContext(AppContext);

    const navigate = useNavigate();

    const form = useRef();

    const onSubmit = () => {
        const formData = new FormData(form.current);
        
        const buyer = {
            "name": formData.get("name"),
            "email": formData.get("email"),
            "address": formData.get("address"),
            "apto": formData.get("apto"),
            "city": formData.get("city"),
            "country": formData.get("country"),
            "state": formData.get("state"),
            "cp": formData.get("cp"),
            "phone": formData.get("phone"),
        };

        addToBuyer(buyer);

        navigate('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name" />
                        <input type="text" placeholder="Correo Electronico" name="email" />
                        <input type="text" placeholder="Direccion" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="number" placeholder="Codigo postal" name="cp" />
                        <input type="number" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to='/checkout'>
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type='button' onClick={onSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
