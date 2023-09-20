import React from 'react';

export default function Counter({ counter, setCounter }) {
  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    if (counter === 1 || counter < 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-div">
      <button type="button" onClick={restar} title="Quitar un producto">
        <i className="fa-solid fa-minus" />
      </button>
      <h3>{counter}</h3>
      <button type="button" onClick={sumar} title="Agregar un producto">
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  );
}
