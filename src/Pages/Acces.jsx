import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DoctolibLogo from '../Components/DoctolibLogo';
import '../Scss/Acces.scss';

const position = [48.9358, 1.9927];

const Acces = () => {
  return (
    <div className="acces-container">
      <DoctolibLogo />
      <h1>Accès à la Maison Médicale</h1>
      <div className="image-with-caption">
        <img src="../assets/images/local1.webp" alt="Vu du site" className="captioned-image" />
        <div className="caption">Vu du site</div>
      </div>

      <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Cabinet Médical<br />75 Rue du Pré aux Moutons, 78670 Villennes-sur-Seine
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Acces;
