import React, { useState, useEffect } from 'react';
import '../Scss/Blog.scss';
import DoctolibLogo from '../Components/DoctolibLogo';  
import blogContent from '../data/blogContent.json'; 

const Blog = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagesToPreload = blogContent.videos.map(video => video.imageSrc);
    let loadedImagesCount = 0;

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImagesCount++;
        if (loadedImagesCount === imagesToPreload.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="loading-container">
        <img
          src="/assets/images/caduceus.webp"
          alt="Caduceus"
          style={{
            width: '180px',
            height: '180px',
            animation: 'rotate 10s linear infinite',
          }}
        />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="blog">
      <h2>Comprendre l'Ostéopathie</h2>
      <p>Découvrez des ressources utiles pour approfondir vos connaissances sur l'ostéopathie.</p>
      <DoctolibLogo />
      <div className="video-gallery">
        {blogContent.videos.map((video, index) => (
          <div key={index} className="video-card">
            {video.imageSrc && (
              <img src={video.imageSrc} alt={video.title} className="video-image" />
            )}
            <div className="video-info">
              <h3>
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="video-link">
                  {video.title}
                </a>
              </h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
