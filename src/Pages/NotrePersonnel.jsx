import React from 'react';
import '../Scss/NotrePersonnel.scss'; 
import salle2Image from '../assets/images/Salle2.webp';
import DoctolibLogo from '../Components/DoctolibLogo.jsx'; 
import doctorsData from '../data/doctors.json'; 

function NotrePersonnel() {
  const doctors = doctorsData.doctors;

  return (
    <div className="notre-personnel" style={{ backgroundImage: `url(${salle2Image})` }}>
      <DoctolibLogo />
      <h2>Notre Personnel</h2>
      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <h4>{doctor.specialty}</h4>
              <p>{doctor.bio}</p>

              {doctor.formations && doctor.formations.length > 0 && (
                <>
                  <h5>Formations</h5>
                  <ul>
                    {doctor.formations.map((formation, idx) => (
                      <li key={idx}>{formation}</li>
                    ))}
                  </ul>
                </>
              )}

              {doctor.experiences && doctor.experiences.length > 0 && (
                <>
                  <h5>Expériences</h5>
                  <ul>
                    {doctor.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </>
              )}

              {doctor.associations && (
                <>
                  <h5>Associations</h5>
                  <p>{doctor.associations}</p>
                </>
              )}

              {doctor.publications && doctor.publications.length > 0 && (
                <>
                  <h5>Travaux et Publications</h5>
                  <ul>
                    {doctor.publications.map((publication, idx) => (
                      <li key={idx}>{publication}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="consult-image-container">
        <img src="/assets/images/consult.webp" alt="Consultation" className="consult-image" />
      </div>
    </div>
  );
}

export default NotrePersonnel;
