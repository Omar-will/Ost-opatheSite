import React, { useState } from 'react';
import '../Scss/FAQ.scss'; 
import DoctolibLogo from '../Components/DoctolibLogo';
import faqContent from '../data/faqContent.json';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <DoctolibLogo />
      <h1>Questions Fréquentes</h1>
      <div className="faq-list">
        {faqContent.questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
