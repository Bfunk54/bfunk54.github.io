import React, { useState } from 'react';
import Nav from './Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './img/home/background2.jpg';

export default function PortfolioContainer() {
  var background = {
    backgroundImage: `url(${backgroundImage})`,
    repeat: 'no-repeat',
    backgroundSize: 'cover'
 }

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={background}>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main style={{paddingTop: '80px'}}>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
