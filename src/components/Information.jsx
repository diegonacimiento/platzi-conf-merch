import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useRef } from 'react';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
import useValidateForm from '../hooks/useValidateForm';

export default function Information() {
  const {
    addToBuyer,
    state: { buyer },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const form = useRef();

  const { stateError, validationForm } = useValidateForm();

  const onSubmit = () => {
    const matchForm = validationForm(form);

    const formData = new FormData(form.current);

    const sendBuyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      dpto: formData.get('dpto'),
      city: formData.get('city'),
      state: formData.get('state'),
      country: formData.get('country'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(sendBuyer);

    if (matchForm) navigate('/checkout/payment');
  };

  return (
    <div className="Information" data-aos="zoom-in-right">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form} id="my-form">
            <p className="error-inputs"> {stateError.name} </p>
            <input
              required
              type="text"
              placeholder="Nombre completo"
              name="name"
              defaultValue={buyer[0]?.name}
            />
            <p className="error-inputs"> {stateError.email} </p>
            <input
              required
              type="text"
              placeholder="Correo electrónico"
              name="email"
              defaultValue={buyer[0]?.email}
            />
            <p className="error-inputs"> {stateError.address} </p>
            <input
              required
              type="text"
              placeholder="Dirección"
              name="address"
              defaultValue={buyer[0]?.address}
            />
            <p className="error-inputs"> </p>
            <input
              type="text"
              placeholder="N° de departamento"
              name="dpto"
              defaultValue={buyer[0]?.dpto}
            />
            <p className="error-inputs"> {stateError.city} </p>
            <input
              required
              type="text"
              placeholder="Ciudad o municipio"
              name="city"
              defaultValue={buyer[0]?.city}
            />
            <p className="error-inputs"> {stateError.state} </p>
            <input
              required
              type="text"
              placeholder="Provincia o estado"
              name="state"
              defaultValue={buyer[0]?.state}
            />
            <p className="error-inputs"> {stateError.country}</p>
            <input
              required
              type="text"
              placeholder="País"
              name="country"
              defaultValue={buyer[0]?.country}
            />
            <p className="error-inputs"> {stateError.cp} </p>
            <input
              required
              className="myNumberInput"
              type="number"
              placeholder="Código postal"
              name="cp"
              defaultValue={buyer[0]?.cp}
            />
            <p className="error-inputs"> {stateError.phone} </p>
            <input
              required
              className="myNumberInput"
              type="text"
              placeholder="Teléfono"
              name="phone"
              defaultValue={buyer[0]?.phone}
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={onSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
