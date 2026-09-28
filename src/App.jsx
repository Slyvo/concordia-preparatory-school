import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'programs':
        return <ProgramsPage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'events':
        return <EventsPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="page-shell">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
