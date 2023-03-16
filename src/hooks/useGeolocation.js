// Importamos axios:
import axios from "axios";
// Importamos useEffect y useState:
import { useEffect, useState } from 'react';

// Creamos y exportamos la siguiente función que recibe address como parámetro:
export default function useGeolocation(address) {
    // Creamos el state de map:
    const [map, setMap] = useState();

    // Creamos la variable url con la siguiente url dinámica para poder pasarle
    // el address que recibimos como parámetro:
    const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`;

    // Creamos un useEffect:
    useEffect(() => {
        // Creamos una función asíncrona que haga la petición:
        const getData = async () => {
            // Hacemos la petición y guardamos la respuesta:
            const response = await axios(url);
            // Actualizamos el valor del map con response:
            setMap(response);
        }
        // Ejecutamos la función:
        getData();
    }, []);

    // Retornamos map:
    return map;
}
