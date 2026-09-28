import React, { useState } from 'react';

const events = [
  { id: 1, title: 'Open Day', date: 'Oct 12', time: '9 AM - 12 PM', category: 'Admissions', location: 'Main Campus' },
  { id: 2, title: 'Parent-Teacher Conferences', date: 'Oct 15-17', time: '4-6 PM', category: 'Academic', location: 'School' },
  { id: 3, title: 'STEM Fair', date: 'Oct 22', time: '2-5 PM', category: 'Academic', location: 'Main Hall' },
  { id: 4, title: 'Sports Competition', date: 'Oct 25-26', time: 'All Day', category: 'Sports', location: 'Grounds' },
  { id: 5, title: 'School Musical', date: 'Nov 5-6', time: '6 PM', category: 'Arts', location: 'Auditorium' },
  { id: 6, title: 'Environmental Week', date: 'Nov 10-14', time: 'Various', category: 'Community', location: 'Campus' },
];

function EventsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Events</p>
          <h1>What's happening at Concordia</h1>
          <p className="lead">Stay connected with our school calendar.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="event-filters">
            {['All', 'Admissions', 'Academic', 'Sports', 'Arts', 'Community'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="events-list">
            {filtered.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-date">
                  <span className="event-month">{event.date.split(' ')[0]}</span>
                  <span className="event-day">{event.date.split('-')[0]}</span>
                </div>
                <div className="event-details">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className="event-category">{event.category}</span>
                  </div>
                  <p className="event-time">🕐 {event.time}</p>
                  <p className="event-location">📍 {event.location}</p>
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