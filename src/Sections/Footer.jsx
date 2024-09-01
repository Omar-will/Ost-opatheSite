import React, { useState } from 'react';
import '../Scss/Footer.scss';

function Footer() {
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleLegalModal = () => setLegalModalOpen(!isLegalModalOpen);
  const toggleContactModal = () => setContactModalOpen(!isContactModalOpen);

  return (
    <div className="Footer">
      <header className="Footer-header">
        <p>
          Prenez rendez-vous en ligne sur    
          <a
            className="Footer-link"
            href="https://www.doctolib.fr/osteopathe/vilennes-seine/sebastien-azanza"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doctolib.
          </a>
        </p>
        <p>
          <span className="Footer-link" onClick={toggleLegalModal}>Mentions légales</span> | 
          <span className="Footer-link" onClick={toggleContactModal}> Contact</span>
        </p>
      </header>

      {/* Modal for Legal */}
      {isLegalModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleLegalModal}>&times;</span>
            <h2>Mentions légales</h2>
            <p>Voici les mentions légales de notre site...</p>
          </div>
        </div>
      )}

      {/* Modal for Contact */}
      {isContactModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleContactModal}>&times;</span>
            <h2>Contact</h2>
            <p>Vous pouvez nous contacter à l'adresse suivante : contact@example.com</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
