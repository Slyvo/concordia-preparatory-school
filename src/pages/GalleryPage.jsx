import React, { useState } from 'react';

const categories = [
  { name: 'Academics', images: [1, 2, 3, 4] },
  { name: 'Sports', images: [5, 6, 7, 8] },
  { name: 'Arts', images: [9, 10, 11, 12] },
  { name: 'Events', images: [13, 14, 15, 16] },
];

function GalleryPage() {
  const [selected, setSelected] = useState(0);
  const current = categories[selected];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Life at Concordia</h1>
          <p className="lead">Moments that capture the spirit of our school community.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-nav">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setSelected(idx)}
                className={`gallery-tab ${selected === idx ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="gallery-header">
            <h2>{current.name}</h2>
          </div>
          <div className="gallery-grid">
            {current.images.map((id) => (
              <div key={id} className="gallery-item">
                <div className="gallery-image-placeholder">
                  <div className="image-number">{id}</div>
                </div>
                <h3>Photo {id}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;