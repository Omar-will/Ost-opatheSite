import React, { useState, useEffect, useCallback, useMemo } from 'react';
import "../Scss/Home.scss";

const LazyImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => [
    "/assets/images/image1.webp",
    "/assets/images/image2.webp",
    "/assets/images/image3.webp",
  ], []);

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Changer l'image toutes les 5 secondes
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div>
      <main>
        <section className="home-content">
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
          <LazyImage
            className="logo"
            src="/assets/images/ost-removebg-preview.webp"
            alt="Ostéopathe logo"
          />
          <div className="carrouselContainer">
            <div className="textContainer">
              <h1>Sebastien Azanza</h1>
              <LazyImage
                src="/assets/images/osté-removebg.png"
                alt="Ostéopathe Logo"
                className="osteoLogo"
              />
              <p>Redonnez à votre corps la liberté de mouvement.</p>
            </div>
            <button className="prevButton" onClick={prevImage}>❮</button>
            {images.map((src, index) => (
              <LazyImage
                key={index}
                className={`carrouselImg ${index === currentIndex ? 'active' : ''}`}
                src={src}
                alt={`Image ${index + 1}`}
              />
            ))}
            <button className="nextButton" onClick={nextImage}>❯</button>
          </div>
          <div className="triangle"></div>
          <div className="triangle2"></div>
        </section>
        <h2 className="text-between">Présentation du Cabinet d'Ostéopathie à Villennes-sur-Seine</h2>
        <div className="text-content">
          <p>75 Rue du Pré aux Moutons, 78670 Villennes-sur-Seine.</p>
          <p>Uniquement sur rendez-vous du lundi au vendredi de 08h00 à 19h00.</p>
          <p>Le samedi de 09h00 à 12h00.</p>
          <h3><b>Suivez votre ostéopathe sur les réseaux sociaux</b></h3>
        <LazyImage
          src="/assets/images/linkedin.png"
          alt="LinkedIn Logo"
          className="LogoRéseau"
        />
        <LazyImage
          src="/assets/images/facebook.png"
          alt="LinkedIn Logo"
          className="LogoRéseau"
        />
        <LazyImage
          src="/assets/images/tiktok.png"
          alt="LinkedIn Logo"
          className="LogoRéseau"
        />
        </div>
        {/* Ajout de l'image en dessous du texte */}
      </main>
    </div>
  );
}

export default Home;
