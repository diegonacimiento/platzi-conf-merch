import React from "react";

export default function Counter({counter, setCounter}) {

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter === 1 || counter < 1) {
            setCounter(1);
        } else {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="counter-div">
            <h3>Cantidad: {counter}</h3>
            <button 
                type="button" 
                onClick={restar}
            > 
                <i className="fa-solid fa-minus" title="Quitar un producto" /> 
            </button>
            <button 
                type="button" 
                onClick={sumar}
            > 
                <i className="fa-solid fa-plus" title='Agregar un producto' /> 
            </button>
        </div>
    );
}