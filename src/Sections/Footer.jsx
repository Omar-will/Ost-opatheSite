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
            <p>L'Association Registre des Ostéopathes de France, à but non lucratif régie par la loi du 1er juillet 1901 et son décret d'application du 16 août 1901, enregistrée sous le n° W332002941 à la Préfecture de Gironde (esplanade Charles de Gaulle 33077 Bordeaux cedex). Responsable légal : Christophe COUTURAUD, Président.

Adresse mail contact@osteopathie.org :

Les données à caractère personnelle recueillies sur le site par le biais du formulaire contact sont confidentielles et ne font l’objet d’aucune diffusion extérieure.

 Formulaire de demande d’inscription :

Les données recueillies par le biais du formulaire de demande d’adhésion sont utilisées pour transmettre des informations uniquement par pushmailing. Elles ne font l’objet d’aucune diffusion.

La mention relative à la Loi informatique et liberté est précisé sous le formulaire de demande d’inscription.

Conformément à la Loi Informatique et Libertés du 06/01/1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant et d'opposition à leur traitement. Si vous souhaitez l'exercer, vous pouvez écrire</p>
          </div>
        </div>
      )}

      {/* Modal for Contact */}
      {isContactModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleContactModal}>&times;</span>
            <h2>Contact</h2>
            <p>Horaires et coordonnées</p>
            <p>Lundi : 08h00 - 19h00</p>
            <p>Mardi : 08h00 - 19h00</p>
            <p>Mercredi : 08h00 - 19h00</p>
            <p>Jeudi : 08h00 - 19h00</p>
            <p>Vendredi : 08h00 - 19h00</p>
            <p>Samedi : 09h00 - 12h00</p>
            <p>Coordonnées : 06 44 14 27 18</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
