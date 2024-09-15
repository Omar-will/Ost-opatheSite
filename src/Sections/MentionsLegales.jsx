import React from 'react';
import '../Scss/MentionsLegales.scss'; 
import mentionsLegalesData from '../data/mentions_legales.json';

const MentionsLegales = () => {
  return (
    <div className="mentions-legales">
      <h1>{mentionsLegalesData.title}</h1>
      {mentionsLegalesData.sections.map((section, index) => (
        <div key={index}>
          <p><strong>{section.title}</strong></p>
          {section.content.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MentionsLegales;
