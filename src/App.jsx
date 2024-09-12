import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Pages/Home.jsx';
import Consultation from './Pages/Consultation';
import NotrePersonnel from './Pages/NotrePersonnel';
import LesLocaux from './Pages/LesLocaux.jsx';
import Blog from './Pages/Blog';
import Acces from './Pages/Acces.jsx';
import FAQ from './Pages/FAQ';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/notre-personnel-medical" element={<NotrePersonnel />} />
          <Route path="/les-locaux" element={<LesLocaux />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Acces" element={<Acces />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
