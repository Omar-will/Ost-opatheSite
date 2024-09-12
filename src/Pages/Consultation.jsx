import React, { useState, useEffect } from 'react';
import '../Scss/Consultation.scss';
import Modal from 'react-modal';
import DoctolibLogo from '../Components/DoctolibLogo';
import specialitesData from '../data/consultationContent.json'; 

Modal.setAppElement('#root');

const SpecialiteCard = ({ title, imageSrc, onClick }) => (
  <div className="specialite-card" onClick={onClick}>
    <img src={imageSrc} alt={title} className="specialite-image" />
    <h3>{title}</h3>
  </div>
);

function Consultation() {
  const [showShapes, setShowShapes] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showCaduceus, setShowCaduceus] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false); 

  useEffect(() => {
    const imagesToPreload = [
      '/assets/images/osteopathe-crane.webp',
      '/assets/images/ostéopathie-myofasciale.webp',
      '/assets/images/ostéopathie-pédiatrique.webp',
      '/assets/images/ostéopathie-structurelle.webp',
    ];

    let loadedImagesCount = 0;
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImagesCount++;
        if (loadedImagesCount === imagesToPreload.length) {
          setImagesLoaded(true); 
        }
      };
    });
  }, []);

  const openModal = (title, definition, imageSrc) => {
    setModalContent({ title, definition, imageSrc });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShapes(true);
      setShowCaduceus(true); 
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!imagesLoaded) {
    return (
      <div>
        <img
          src="/assets/images/caduceus.webp"
          alt="Caduceus"
          style={{
            width: '180px',
            height: '180px',
            animation: 'rotate 10s linear infinite',
          }}
        />
        <p>Loading...</p>
      </div>
    );
  }
  

  return (
    <div className="consultation">
      <DoctolibLogo />
      <h1>Nos Spécialités en Ostéopathie</h1>
      <div className="specialites-container">
        {specialitesData.specialites.map((specialite, index) => (
          <SpecialiteCard
            key={index}
            title={specialite.title}
            imageSrc={specialite.imageSrc}
            onClick={() => openModal(specialite.title, specialite.definition, specialite.imageSrc)}
          />
        ))}
      </div>

      {showShapes && (
        <div className="geometric-shapes">
          <div className="circle"></div>
          <div
            className="circle2"
            style={{
              backgroundImage: showCaduceus
                ? "url('/assets/images/caduceus.webp')"
                : 'none',
              backgroundSize: '180px 180px',
              backgroundPosition: 'center 8mm',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="circle3"></div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalConsult"
        overlayClassName="modal-overlay"
      >
        <div className="modal-image-container">
          <img src={modalContent.imageSrc} alt={modalContent.title} className="modal-image" />
          <div className="modal-content-overlay">
            <h2>{modalContent.title}</h2>
            <p>{modalContent.definition}</p>
          </div>
        </div>
        <button onClick={closeModal} className="modal-close">X</button>
      </Modal>
    </div>
  );
}

export default Consultation;
