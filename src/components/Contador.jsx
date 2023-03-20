import React from "react";

export default function Contador({contador, setContador}) {

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        if (contador === 0 || contador < 0) {
            setContador(0);
        } else {
            setContador(contador - 1)
        }
    }

    return (
        <div className="contador-div">
            <h3>Cantidad: {contador}</h3>
            <button type="button" onClick={restar}> <i className="fa-solid fa-minus" title="Quitar un producto"> </i> </button>
            <button type="button" onClick={sumar}> <i className="fa-solid fa-plus" title='Agregar un producto' /> </button>
        </div>
    );
}





