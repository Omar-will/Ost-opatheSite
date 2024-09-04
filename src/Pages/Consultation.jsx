import React from 'react';
import '../Scss/Consultation.scss';

// Composant pour afficher une spécialité
const SpecialiteCard = ({ title, definition, imageSrc }) => (
  <div className="specialite-card">
    <img src={imageSrc} alt={title} className="specialite-image" />
    <h3>{title}</h3>
    <p>{definition}</p>
  </div>
);

const LazyImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

function Consultation() {
  return (
    
    <div className="consultation">
      <a
            className="Doctolib"
            href="https://www.doctolib.fr/osteopathe/vilennes-seine/sebastien-azanza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyImage
              src="/assets/images/doctolib-logo.webp"
              alt="Doctolib Logo"
              className="logoDoctolib"
            />
          </a>
      <h1>Nos Spécialités en Ostéopathie</h1>
      <div className="specialites-container">
        <SpecialiteCard
          title="Ostéopathie Crânienne"
          definition="Une approche de l'ostéopathie qui se concentre sur le traitement des dysfonctions du crâne et des structures voisines, en utilisant des techniques douces pour améliorer la mobilité et la fonction du système crânio-sacré."
          imageSrc="/assets/images/osteopathie-cranienne.png"
        />
        <SpecialiteCard
          title="Ostéopathie Myofasciale"
          definition="Une méthode qui cible les restrictions et les tensions dans les muscles et les fascias (les tissus conjonctifs qui enveloppent les muscles) pour restaurer la mobilité et réduire la douleur en travaillant sur les points de déclenchement et les adhérences."
          imageSrc="/assets/images/osteopathie-myofasciale.png"
        />
        <SpecialiteCard
          title="Ostéopathie Pédiatrique"
          definition="Une spécialité de l'ostéopathie qui se concentre sur les soins de santé des enfants, des nourrissons et des femmes enceintes, en utilisant des techniques adaptées à leur développement et à leurs besoins spécifiques."
          imageSrc="/assets/images/osteopathie-pediatrique.png"
        />
        <SpecialiteCard
          title="Ostéopathie Structurelle"
          definition="Une approche qui se concentre sur la correction des désalignements et des dysfonctions du système musculo-squelettique, en utilisant des manipulations directes pour améliorer la fonction articulaire et musculaire."
          imageSrc="/assets/images/osteopathie-structurelle.png"
        />
      </div>
    </div>
  );
}

export default Consultation;
