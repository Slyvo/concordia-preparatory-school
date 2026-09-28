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
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="#facebook" aria-label="Facebook">f</a>
          <a href="#twitter" aria-label="Twitter">𝕏</a>
          <a href="#instagram" aria-label="Instagram">📷</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Concordia Preparatory School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;