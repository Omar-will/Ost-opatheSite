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
          &#9776;
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/"><h1>Accueil</h1></Link></li>
          <li><Link to="/consultation"><h1>Consultation</h1></Link></li>
          <li><Link to="/notre-personnel-medical"><h1>Notre Personnel</h1></Link></li>
          <li><Link to="/les-locaux"><h1>Les Locaux</h1></Link></li>
          <li><Link to="/Blog"><h1>Blog</h1></Link></li>
          <li><Link to="/Acces"><h1>Accès</h1></Link></li>
          <li><Link to="/FAQ"><h1>FAQ</h1></Link></li>
          <li><Link to="/Contact"><h1>Contact</h1></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
