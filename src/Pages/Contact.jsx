import React, { useState } from "react";
import emailjs from 'emailjs-com'; 
import '../Scss/Contact.scss';

const Contact = () => {
  const [formDataClient, setFormDataClient] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const [formDataPatient, setFormDataPatient] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });


  const handleInputChangeClient = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataClient({
      ...formDataClient,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleInputChangePatient = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataPatient({
      ...formDataPatient,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmitClient = (e) => {
    e.preventDefault();
    
    console.log('Sending form data client:', formDataClient);
  
    emailjs.send('service_6reb998', 'template_omt7tqs', {
      from_name: formDataClient.name,
      from_email: formDataClient.email,
      to_email: 'seb.azanza@gmail.com',
      phone: formDataClient.phone,
      subject: formDataClient.subject,
      message: formDataClient.message,
    }, 'fif7Lw5nHgichl2p8')
    .then((result) => {
      alert('Formulaire Client soumis avec succès !');

      setFormDataClient({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    }, (error) => {
      console.error('Erreur lors de l\'envoi du formulaire client :', error);
    });
  };


  const handleSubmitPatient = (e) => {
    e.preventDefault();
    
    console.log('Sending form data patient:', formDataPatient);
  
    emailjs.send('service_6reb998', 'template_aym4dsm', {
      from_name: formDataPatient.name,
      from_email: formDataPatient.email,
      to_email: 'seb.azanza@gmail.com',
      phone: formDataPatient.phone,
      subject: formDataPatient.subject,
      message: formDataPatient.message,
    }, 'fif7Lw5nHgichl2p8')
    .then((result) => {
      alert('Formulaire Patient soumis avec succès !');

      setFormDataPatient({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    }, (error) => {
      console.error('Erreur lors de l\'envoi du formulaire patient :', error);
    });
  };

  return (
    <div className="contact-container">
      {/* Formulaire Client */}
      <form onSubmit={handleSubmitClient}>
        <h2>Formulaire Client</h2>
        <label>
          Votre nom (obligatoire)
          <input
            type="text"
            name="name"
            value={formDataClient.name}
            onChange={handleInputChangeClient}
            required
          />
        </label>
        <label>
          E-mail (obligatoire)
          <input
            type="email"
            name="email"
            value={formDataClient.email}
            onChange={handleInputChangeClient}
            required
          />
        </label>
        <label>
          Téléphone (obligatoire)
          <input
            type="tel"
            name="phone"
            value={formDataClient.phone}
            onChange={handleInputChangeClient}
            required
          />
        </label>
        <label>
          Objet (obligatoire)
          <input
            type="text"
            name="subject"
            value={formDataClient.subject}
            onChange={handleInputChangeClient}
            required
          />
        </label>
        <label>
          Votre message (obligatoire)
          <textarea
            name="message"
            value={formDataClient.message}
            onChange={handleInputChangeClient}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="privacy"
            checked={formDataClient.privacy}
            onChange={handleInputChangeClient}
            required
          />
          J'accepte la politique de confidentialité.
        </label>
        <button type="submit">Envoyer</button>
      </form>

      {/* Formulaire Patient */}
      <form onSubmit={handleSubmitPatient}>
        <h2>Formulaire Patient</h2>
        <label>
          Votre nom (obligatoire)
          <input
            type="text"
            name="name"
            value={formDataPatient.name}
            onChange={handleInputChangePatient}
            required
          />
        </label>
        <label>
          E-mail (obligatoire)
          <input
            type="email"
            name="email"
            value={formDataPatient.email}
            onChange={handleInputChangePatient}
            required
          />
        </label>
        <label>
          Téléphone (obligatoire)
          <input
            type="tel"
            name="phone"
            value={formDataPatient.phone}
            onChange={handleInputChangePatient}
            required
          />
        </label>
        <label>
          Objet (obligatoire)
          <input
            type="text"
            name="subject"
            value={formDataPatient.subject}
            onChange={handleInputChangePatient}
            required
          />
        </label>
        <label>
          Votre message (obligatoire)
          <textarea
            name="message"
            value={formDataPatient.message}
            onChange={handleInputChangePatient}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="privacy"
            checked={formDataPatient.privacy}
            onChange={handleInputChangePatient}
            required
          />
          J'accepte la politique de confidentialité.
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
