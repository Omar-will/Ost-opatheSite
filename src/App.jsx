import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Pages/Home.jsx';
import Consultation from './Pages/Consultation';
import FAQ from './Pages/FAQ';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/FAQ" element={<FAQ />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
