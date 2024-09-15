import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Scss/Footer.scss';

function Footer() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleContactModal = () => setContactModalOpen(!isContactModalOpen);

  return (
    <div className="Footer">
      <header className="Footer-header">
        <p>
          <Link to="/mentions-legales" className="Footer-link">Mentions légales</Link> | 
          <span className="Footer-link" onClick={toggleContactModal}> Contact</span>
        </p>
      </header>

      {isContactModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleContactModal}>&times;</span>
            <h2>Contact</h2>
            <p>Coordonnées : 06 44 14 27 18</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

