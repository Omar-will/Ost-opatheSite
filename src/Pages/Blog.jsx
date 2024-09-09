import React from 'react';
import '../Scss/Blog.scss'; 

const videos = [
  {
    title: 'Introduction à l\'ostéopathie',
    description: 'Une introduction générale à l\'ostéopathie et ses principes de base.',
    link: 'https://www.osteo91.fr/osteopathebreuillet/l-osteopathie.html', 
  },
  {
    title: 'Techniques de manipulation',
    description: 'Démonstration des techniques de manipulation courantes utilisées en ostéopathie.',
    // videoSrc: 'https://www.youtube-nocookie.com/embed/ZimzXhwa0a0',
  },
  {
    title: 'Études de cas',
    description: 'Présentation de plusieurs études de cas pour illustrer les applications de l\'ostéopathie.',
    // videoSrc: 'https://www.youtube-nocookie.com/embed/u4mg51FauCs?si=F7VvXZzGcs6BwjXt',
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <h2>Blog Vidéos</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            {video.videoSrc ? (
              <iframe
                width="560"
                height="315"
                src={video.videoSrc}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="video-link">
                {video.title}
              </a>
            )}
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
