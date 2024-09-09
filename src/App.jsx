import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Pages/Home.jsx';
import Consultation from './Pages/Consultation';
import NotrePersonnel from './Pages/NotrePersonnel';
import Blog from './Pages/Blog';
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
