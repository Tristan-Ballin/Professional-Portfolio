import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './footer/Footer';
import Headshot from '../assets/Headshot.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
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
    <div>
      <header className="d-flex header">
      <img src={Headshot} height="120px"/>
      <h1 className='title'>Tristan Ballin</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <Footer/>
    </div>
  );
}
