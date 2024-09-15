import React from 'react';
import '../Scss/DoctolibLogo.scss'; 
const DoctolibLogo = () => {
  return (
    <a
      className="Doctolib"
      href="https://www.doctolib.fr/osteopathe/vilennes-seine/sebastien-azanza"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/images/doctolib-logo.webp"
        alt="Doctolib Logo"
        className="logoDoctolib"
      />
    </a>
  );
};

export default DoctolibLogo;
