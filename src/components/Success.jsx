import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from './Map';
import useGeolocation from '../hooks/useGeolocation';

export default function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);

  const fullAddress = `${buyer[0]?.address} ${buyer[0]?.dpto} ${buyer[0]?.city} ${buyer[0]?.state} ${buyer[0]?.country}`;

  const location = useGeolocation(fullAddress);

  return (
    <div className="Success" data-aos="fade-down-right">
      <div className="Success-content">
        <h2>¡{buyer[0]?.name}, gracias por tu compra!</h2>
        <span>Tu pedido llegara en 3 dias a la dirección de:</span>
        {location?.data?.length ? (
          <div className="Success-map">
            <Map location={location} />
          </div>
        ) : (
          <h3>Su servicio de transporte más cercano.</h3>
        )}
      </div>
    </div>
  );
}
