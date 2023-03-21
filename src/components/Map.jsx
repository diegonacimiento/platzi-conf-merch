import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import '../styles/components/Map.css';

const myIcon = new Icon({
    iconUrl: 'https://3.bp.blogspot.com/-PZUwIW1A2NA/WVuGhNELOZI/AAAAAAAHKac/qpTHvSfZn5cd8NxsapkrqKajphawkJG7ACLcBGAs/s1600/Map-Marker-PNG-File.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32]
});

export default function Map({ location }) {    
    const position = [location?.data[0]?.lat, location?.data[0]?.lon];

    return (
        <div className='leaflet-container'>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
            />
            
            {location && (
                <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={myIcon} position={position} />
                </MapContainer>
            )}
        </div>
    );
}
