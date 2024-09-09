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
            <p>Mentions légales

Sébastien Azanza
4 Allée de la Crète, 78670 Villennes-sur-Seine

Contact :
06 44 14 27 18
4 Allée de la Crète, 78670 Villennes-sur-Seine

Numéro ADELI

780010617

Directeur de la publication :
Sébastien Azanza

Mentions légales supplémentaires

PROPRIÉTÉ INTELLECTUELLE

Les informations figurant sur le site sont réservées à un usage exclusivement personnel et ne peuvent être en tout ou partie reproduites. L’ensemble des données (textes, sons ou images) figurant sur les pages de ce site est la propriété exclusive de Sébastien Azanza. Les marques de l’exploitant du site Internet, ainsi que les logos figurant sur le site sont des éléments protégés par les dispositions du droit de la propriété intellectuelle et ne peuvent faire l’objet, sans consentement de Sébastien Azanza, d’aucune reproduction ni représentation partielle ou totale. Toute reproduction ou représentation, en tout ou partie, à d’autres fins sur un quelconque support est interdite sans l’autorisation expresse et préalable de Sébastien Azanza et constituerait une contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. Les liens hypertextes mis en œuvre au sein du site en direction d’autres sites et/ou de pages personnelles et d’une manière générale vers toutes ressources existantes sur internet ne sauraient engager la responsabilité de Sébastien Azanza. Législation française : Droit d’accès au fichier informatisé : toute information directement ou indirectement nominative figurant sur ce site peut être rectifiée ou retirée à la demande de la personne concernée à l’administrateur du service, conformément à la loi française No 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés.Quelques images sont Conçu par Freepik voici le lien renvoyant vers www.freepik.com</p>
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
