import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {mapAdress } from '../constants';
import markerMap from './../../img/icons/map.png';
import './customMarker.css';


const CustomMarker = () => (

    <div className="customMarker">
                        <img src={markerMap} alt="Logo"/> 
                </div>

  );

const Map = () => {
  const position = [49.45715, 32.04128]; // координаты местоположения на карте
  /* вулиця Хрещатик, 27, Київ, Україна, 01001 */
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '476px', width: '1100px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      <CustomMarker />
       { <Popup>
        Ми знаходимось тут ↓<br />{mapAdress}
        </Popup>}
      </Marker>
    </MapContainer>
  );
};

export default Map;
