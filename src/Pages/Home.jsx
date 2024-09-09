import React, { useState, useEffect, useCallback, useMemo } from 'react';
import "../Scss/Home.scss";
import content from '../data/homeContent.json';

const LazyImage = ({ src, alt, className, lazy = true }) => (
  <img src={src} alt={alt} className={className} loading={lazy ? "lazy" : "eager"} />
);

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => content.osteopath.images, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); 
    return () => clearInterval(interval);
  }, [nextImage]);

  // Préchargement uniquement de la première image du carrousel
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/images/image1.webp'; // Précharge uniquement la première image
  }, []);

  return (
    <div>
      <main>
        <section className="home-content">
          <a
            className="Doctolib"
            href={content.osteopath.links.doctolib}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyImage
              src="/assets/images/doctolib-logo.webp"
              alt="Doctolib Logo"
              className="logoDoctolib"
            />
          </a>
          <LazyImage
            className="logo"
            src="/assets/images/ost-removebg-preview.webp"
            alt="Ostéopathe logo"
          />
          <div className="carrouselContainer">
            <div className="textContainer">
              <h1>{content.osteopath.name}</h1>
              <LazyImage
                src="/assets/images/osté-removebg.png"
                alt="Ostéopathe Logo"
                className="osteoLogo"
              />
              <p>{content.osteopath.slogan}</p>
            </div>
            <button className="prevButton" onClick={prevImage}>❮</button>
            {images.map((src, index) => (
              <LazyImage
                key={index}
                className={`carrouselImg ${index === currentIndex ? 'active' : ''}`}
                src={src}
                alt={`Image ${index + 1}`}
                lazy={index !== currentIndex} // Charge immédiatement l'image active, les autres en lazy
              />
            ))}
            <button className="nextButton" onClick={nextImage}>❯</button>
          </div>
          <div className="triangle"></div>
          <div className="triangle2"></div>
        </section>
        <h2 className="text-between">Présentation du Cabinet d'Ostéopathie à Villennes-sur-Seine</h2>
        <div className="text-content">
          <p>{content.osteopath.address}</p>
          {content.osteopath.hours.map((hour, index) => (
            <p key={index}>{hour.days} de {hour.hours}</p>
          ))}
          <h3><b>Suivez votre ostéopathe sur les réseaux sociaux</b></h3>
          {content.osteopath.socialMedia.map((social, index) => (
            <LazyImage
              key={index}
              src={social.image}
              alt={`${social.name} Logo`}
              className="LogoRéseau"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
