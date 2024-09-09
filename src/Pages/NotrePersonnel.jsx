import React from 'react';
import '../Scss/NotrePersonnel.scss'; 
import salle2Image from '../assets/images/Salle2.webp';

function NotrePersonnel() {
  const doctors = [
    {
      name: 'Dr. Sébastien Azanza',
      specialty: 'Ostéopathe',
      bio: 'Dr. Azanza a plus de 15 ans d’expérience en ostéopathie et est spécialisé dans le traitement des douleurs musculo-squelettiques.',
      formations: [
        '2020 - Auriculothérapie - CERS-TA',
        '2018 - Ostéopathe - ISOGM',
        '2013 - Étiopathe - Faculté d\'Etiopathie de Paris',
      ],
      experiences: [
        '2014 - 2019 - Cabinet - Orgeval',
        '2014 - 2017 - Cabinet - Saint-Germain-en-Laye',
        '2014 - 2017 - Enseignant - Centre d\'étiopathie des Pyrénées - Paris',
        '2011 - 2014 - Cabinet - Nogent-le-Roi',
        '2012 - 2013 - Praticien - Hôpital Bicêtre APHP - Le Kremlin-Bicêtre - Urgences',
      ],
      associations: 'Administrateur - TISS Santé 78',
      publications: [
        '2013 - Approche étiopathique des syndromes canalaires du nerf médian - Mémoire',
      ],
    },
    {
      name: 'Dr. Sébastien Azanza',
      specialty: 'Ostéopathe',
      bio: 'Dr. Azanza a plus de 15 ans d’expérience en ostéopathie et est spécialisé dans le traitement des douleurs musculo-squelettiques.',
      formations: [
        '2020 - Auriculothérapie - CERS-TA',
        '2018 - Ostéopathe - ISOGM',
        '2013 - Étiopathe - Faculté d\'Etiopathie de Paris',
      ],
      experiences: [
        '2014 - 2019 - Cabinet - Orgeval',
        '2014 - 2017 - Cabinet - Saint-Germain-en-Laye',
        '2014 - 2017 - Enseignant - Centre d\'étiopathie des Pyrénées - Paris',
        '2011 - 2014 - Cabinet - Nogent-le-Roi',
        '2012 - 2013 - Praticien - Hôpital Bicêtre APHP - Le Kremlin-Bicêtre - Urgences',
      ],
      associations: 'Administrateur - TISS Santé 78',
      publications: [
        '2013 - Approche étiopathique des syndromes canalaires du nerf médian - Mémoire',
      ],
    },
  ];

  return (
    <div className="notre-personnel" style={{ backgroundImage: `url(${salle2Image})` }}>
    
      <h2>Notre Personnel Médical</h2>
      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <h4>{doctor.specialty}</h4>
              <p>{doctor.bio}</p>
              <h5>Formations</h5>
              <ul>
                {doctor.formations.map((formation, idx) => (
                  <li key={idx}>{formation}</li>
                ))}
              </ul>
              <h5>Expériences</h5>
              <ul>
                {doctor.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
              <h5>Associations</h5>
              <p>{doctor.associations}</p>
              <h5>Travaux et Publications</h5>
              <ul>
                {doctor.publications.map((publication, idx) => (
                  <li key={idx}>{publication}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Image between doctor presentations */}
      <div className="consult-image-container">
        <img src="/assets/images/consult.webp" alt="Consultation" className="consult-image" />
      </div>

      <div
        className="circle-custom"
        style={{
          backgroundImage: "url('/assets/images/caduceus.webp')",
        }}
      ></div>
    </div>
  );
}

export default NotrePersonnel;
