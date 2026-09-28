import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Programs', page: 'programs' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Events', page: 'events' },
  ];

  return (
    <header className="topbar">
      <div className="container nav">
        <div className="brand" onClick={() => setCurrentPage('home')}>
          <div className="brand-mark">C</div>
          <div>
            <strong>Concordia</strong>
            <span>Preparatory School</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => setCurrentPage('home')} className="button primary small">
          Enroll Now
        </button>
      </div>
    </header>
  );
}

export default Navigation;