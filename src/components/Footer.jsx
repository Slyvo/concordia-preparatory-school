import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p><strong>Concordia Preparatory School</strong></p>
          <p>Empowering learners for a brighter future</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Instagram">📷</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Concordia Preparatory School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;