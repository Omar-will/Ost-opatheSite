import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Scss/Header.scss'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Icône hamburger */}
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/"><h1>Accueil</h1></Link></li>
          <li><Link to="/consultation"><h1>Consultation</h1></Link></li>
          <li><h1>Accès</h1></li>
          <li><h1>Contact</h1></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
