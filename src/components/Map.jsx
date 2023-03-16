import React from 'react';
// Importamos MapContainer, TileLayer y Marker:
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// Importamos Icon desde leaflet:
import { Icon } from 'leaflet';
import '../styles/components/Map.css';

// Creamos un icono:
const myIcon = new Icon({
    iconUrl: 'https://3.bp.blogspot.com/-PZUwIW1A2NA/WVuGhNELOZI/AAAAAAAHKac/qpTHvSfZn5cd8NxsapkrqKajphawkJG7ACLcBGAs/s1600/Map-Marker-PNG-File.png', // Ponemos la URL del icono
    iconSize: [32, 32], // Cambia el tamaño si es necesario
    iconAnchor: [16, 32] // El margin-left y el margin-top
});

export default function Map() {
    // Creamos una variable que guarde la posición:
    const position = [51.505, -0.09]; // Es un array con las coordenadas

    return (
        <div className='leaflet-container'>
            {/* Link es necesario para que cargue bien el mapa, copiamos tal cual: */}
            <link 
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
            />

            {/* Usamos MapContainer */}
            <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                {/* TileLayer se usa para descargar las imagenes del mapa */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Marker es para el marcador en el mapa */}
                <Marker icon={myIcon} position={position} />
            </MapContainer>
        </div>
    );
}
