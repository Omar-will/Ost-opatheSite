import React, { useState } from 'react';
import '../Scss/LesLocaux.scss';  
import DoctolibLogo from '../Components/DoctolibLogo'; 

const images = [
  { src: '../assets/images/local1.webp', alt: 'Salle 1' },
  { src: '../assets/images/local2.webp', alt: 'Salle 2' },
  { src: '../assets/images/local3.webp', alt: 'Salle 3' },
  { src: '../assets/images/local4.webp', alt: 'Salle 4' },
  { src: '../assets/images/local5.webp', alt: 'Salle 5' },
  { src: '../assets/images/local6.webp', alt: 'Salle 6' },
  { src: '../assets/images/local7.webp', alt: 'Salle 7' },
  { src: '../assets/images/local8.webp', alt: 'Salle 8' },
  { src: '../assets/images/local9.webp', alt: 'Salle 9' },
];

const LesLocaux = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="les-locaux">
      <h2>Nos Cabinets d'Ostéopathie</h2>
      <p>Nous vous accueillons dans nos cabinets situés à Villennes-sur-Seine :</p>
      <DoctolibLogo />
      <div className="location-cards">
        <div className="card">
          <h3>Maison Médicale</h3>
          <p>75 Rue du Pré aux Moutons, 78670 Villennes-sur-Seine</p>
          <p>Un espace moderne et convivial pour vous accueillir en toute sérénité.</p>
        </div>

        <div className="card">
          <h3>4 Allée de la Crète</h3>
          <p>78670 Villennes-sur-Seine</p>
          <p>Un lieu calme et apaisant pour un accompagnement personnalisé.</p>
        </div>
      </div>

      <h2>Nos Locaux en Images</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-card" onClick={() => openModal(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <span className="prev" onClick={prevImage}>&#10094;</span>
          <span className="next" onClick={nextImage}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default LesLocaux;
