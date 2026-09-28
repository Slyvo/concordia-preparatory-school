import React, { useState } from 'react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Open Day - Campus Tours',
    date: 'October 12, 2026',
    time: '9:00 AM - 12:00 PM',
    location: 'Main Campus',
    description: 'Join us for an exclusive campus tour and meet our faculty.',
    category: 'Admissions',
  },
  {
    id: 2,
    title: 'Parent-Teacher Conferences',
    date: 'October 15-17, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'School Halls',
    description: 'Meet with teachers to discuss student progress.',
    category: 'Academic',
  },
  {
    id: 3,
    title: 'STEM Innovation Fair',
    date: 'October 22, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Main Hall',
    description: 'Students showcase science and technology projects.',
    category: 'Academic',
  },
  {
    id: 4,
    title: 'Inter-House Sports',
    date: 'October 25-26, 2026',
    time: 'All Day',
    location: 'Sports Grounds',
    description: 'Houses compete in various sports.',
    category: 'Sports',
  },
  {
    id: 5,
    title: 'School Musical',
    date: 'November 5-6, 2026',
    time: '6:00 PM',
    location: 'Auditorium',
    description: 'Drama and music students present entertainment.',
    category: 'Arts',
  },
  {
    id: 6,
    title: 'Environmental Week',
    date: 'November 10-14, 2026',
    time: 'Various Times',
    location: 'Campus',
    description: 'Activities promoting environmental sustainability.',
    category: 'Community',
  },
];

function EventsPage({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Admissions', 'Academic', 'Sports', 'Arts', 'Community'];

  const filteredEvents = selectedCategory === 'All'
    ? upcomingEvents
    : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Events & Calendar</p>
          <h1>What's happening at Concordia</h1>
          <p className="lead">Stay connected with our school calendar of events and activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Upcoming Events</h2>
          </div>

          <div className="event-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="events-list">
            {filteredEvents.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-date">
                  <span className="event-month">{event.date.split(' ')[1]}</span>
                  <span className="event-day">{event.date.split(' ')[0]}</span>
                </div>
                <div className="event-details">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className="event-category">{event.category}</span>
                  </div>
                  <p className="event-time">🕐 {event.time}</p>
                  <p className="event-location">📍 {event.location}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;