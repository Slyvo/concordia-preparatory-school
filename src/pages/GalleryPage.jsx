import React, { useState } from 'react';

const galleryCategories = [
  {
    name: 'Academics',
    description: 'Students engaged in learning across our classrooms and labs.',
    images: [
      { id: 1, title: 'STEM Lab', description: 'Students exploring robotics' },
      { id: 2, title: 'Science', description: 'Hands-on learning' },
      { id: 3, title: 'Classroom', description: 'Interactive lessons' },
      { id: 4, title: 'Projects', description: 'Collaborative learning' },
    ],
  },
  {
    name: 'Sports',
    description: 'Our athletes in action across various sports.',
    images: [
      { id: 5, title: 'Football', description: 'Championship match' },
      { id: 6, title: 'Athletics', description: 'Sports day' },
      { id: 7, title: 'Volleyball', description: 'Tournament' },
      { id: 8, title: 'Basketball', description: 'Friendly match' },
    ],
  },
  {
    name: 'Arts',
    description: 'Creative expression through art, music, and performance.',
    images: [
      { id: 9, title: 'Drama', description: 'School play' },
      { id: 10, title: 'Art', description: 'Artwork display' },
      { id: 11, title: 'Music', description: 'Orchestra performance' },
      { id: 12, title: 'Festival', description: 'Cultural celebration' },
    ],
  },
  {
    name: 'Events',
    description: 'Memorable moments from our celebrations.',
    images: [
      { id: 13, title: 'Graduation', description: 'Class celebration' },
      { id: 14, title: 'Founders Day', description: 'Annual celebration' },
      { id: 15, title: 'Sports Day', description: 'Competition' },
      { id: 16, title: 'Festival', description: 'Community event' },
    ],
  },
];

function GalleryPage({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const currentCategory = galleryCategories[selectedCategory];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Life at Concordia Preparatory School</h1>
          <p className="lead">Moments that capture the spirit and energy of our school community.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-nav">
            {galleryCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(index)}
                className={`gallery-tab ${selectedCategory === index ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="gallery-header">
            <h2>{currentCategory.name}</h2>
            <p>{currentCategory.description}</p>
          </div>

          <div className="gallery-grid">
            {currentCategory.images.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image-placeholder">
                  <div className="image-number">{image.id}</div>
                </div>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;