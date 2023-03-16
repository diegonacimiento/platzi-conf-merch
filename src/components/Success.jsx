import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from './Map';
// Importamos useGeolocation:
import useGeolocation from '../hooks/useGeolocation';

export default function Success() {
    const { state: { buyer } } = useContext(AppContext);

    // Creamos la variable location y utilizamos useGeolocation pasandole la dirección,
    // en este caso el address que guardamos en el buyer de state:
    const location = useGeolocation(buyer[0]?.address);

    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>{buyer[0]?.name}, gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">
                    {/* Le pasamos location como prop al componente Map: */}
                    <Map location={location} />
                </div>
            </div>
        </div>
    )
}
