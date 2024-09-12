import React from 'react';
import '../Scss/Blog.scss';
import DoctolibLogo from '../Components/DoctolibLogo';  

const videos = [
  {
    title: 'Trouver le bon ostéopathe',
    description: "La communication en ostéopathie est cruciale, souvent sous-estimée malgré son impact sur la relation patient-praticien. Les compétences en communication, depuis l'accueil jusqu'à l'anamnèse, influencent significativement les résultats thérapeutiques. Un langage maladroit peut nuire au patient, tandis qu'une bonne communication aide à mieux comprendre et gérer la douleur.",
    link: 'https://www.reflexosteo.com/blog-sante-bien-etre/trouver-le-bon-osteopathe-l-importance-de-la-communication-dans-la-relation-therapeutique-722',
    imageSrc: '/assets/images/main.webp', 
  },
  {
    title: 'Les sciences ostéopathiques',
    description: "L'ostéopathie, discipline récente, suscite des réactions variées. Son exploration scientifique vise à comprendre ses bases sans imposer de comportements. Cependant, des obstacles structurels et fonctionnels freinent son développement dans ce domaine.",
    link: 'https://publications.osteopathes.pro/fr/articles/2021/03/emergence-des-sciences-osteopathiques/',
    imageSrc: '/assets/images/leg.webp', 
  },
  {
    title: 'Se déplacer une vertèbre',
    description: "Un déplacement vertébral, ou spondylolisthésis, est possible mais rare. Il se produit lorsqu'une vertèbre glisse sur celle en dessous, souvent entraînant les vertèbres supérieures dans ce mouvement. Ce phénomène peut être comparé à un effet domino ou un problème de voisinage dans la colonne vertébrale.",
    link: "https://www.cyclosteo.fr/on-me-dit-que-jai-une-vertebre-deplacee-que-faire/",
    imageSrc: '/assets/images/foot.webp', 
  },
  {
    title: "Syndrome prémenstruel et l'ostéopathie",
    description: "Le syndrome prémenstruel (SPM) désigne un ensemble de symptômes physiques et émotionnels qui surviennent avant les règles, souvent une à deux semaines avant le cycle menstruel. Il peut inclure des douleurs abdominales, des ballonnements, des maux de tête, de la fatigue...",
    link: "https://osteopathe-grenoble-paulinelecourt.fr/le-syndrome-premenstruel-et-losteopathe/",
    imageSrc: '/assets/images/interiorlight.webp', 
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <h2>Comprendre l'Ostéopathie</h2>
      <p>Découvrez des ressources utiles pour approfondir vos connaissances sur l'ostéopathie.</p>
      <DoctolibLogo />
      <div className="video-gallery">
        {videos.map((video, index) => (
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