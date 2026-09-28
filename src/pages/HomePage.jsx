import React from 'react';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '1,200+', label: 'Students Served' },
  { value: '90%', label: 'College Placement' },
  { value: '40+', label: 'After-School Clubs' },
];

const programs = [
  {
    title: 'Early Years',
    description: 'A nurturing environment that builds curiosity, confidence, and foundational skills for young learners (Ages 2-5).',
  },
  {
    title: 'Primary School',
    description: 'Engaging, child-centered instruction that encourages literacy, numeracy, creativity, and strong values (Grades 1-6).',
  },
  {
    title: 'Middle School',
    description: 'Academic rigor with mentorship that prepares learners for leadership, STEM, and critical thinking (Grades 7-9).',
  },
  {
    title: 'Senior School',
    description: 'Focused preparation for national exams, tertiary education, and future-ready careers (Grades 10-12).',
  },
];

const admissionsSteps = [
  'Schedule a school tour and campus visit',
  'Submit the online application and required documents',
  'Attend a student assessment and family interview',
  'Receive an admission offer and complete enrollment',
];

const testimonials = [
  '"The teachers truly care about every child and help them grow in confidence and character." — Parent, Grade 4',
  '"Concordia has created a strong balance between academic excellence and personal development." — Parent, Grade 9',
  '"Our son feels supported, challenged, and inspired every day at Concordia." — Parent, Grade 6',
];

function HomePage({ setCurrentPage }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Nurturing Bright Minds</p>
            <h1>Excellence in learning, leadership, and character.</h1>
            <p className="lead">
              Concordia Preparatory School inspires students to discover their potential through quality education,
              caring mentorship, and a vibrant school community.
            </p>
            <div className="cta-row">
              <button onClick={() => setCurrentPage('home')} className="button primary">
                Apply for Admission
              </button>
              <button onClick={() => setCurrentPage('about')} className="button secondary">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">School Highlights</p>
            <ul>
              <li>Small class sizes for personalized learning</li>
              <li>Strong academics with a values-based approach</li>
              <li>Sports, arts, clubs, and leadership opportunities</li>
              <li>Experienced and passionate faculty</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Academics</p>
            <h2>Programs designed for growth and achievement.</h2>
          </div>

          <div className="card-grid">
            {programs.map((program) => (
              <article className="info-card" key={program.title}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <button className="button secondary small" onClick={() => setCurrentPage('programs')}>
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container admissions-layout">
          <div>
            <p className="eyebrow dark">Admissions</p>
            <h2>Simple steps to join the Concordia family.</h2>
            <p>
              We welcome families who value academic excellence, character formation, and a caring school environment.
            </p>
          </div>

          <div className="steps">
            {admissionsSteps.map((step, index) => (
              <div className="step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt testimonials-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Testimonials</p>
            <h2>Families trust Concordia to inspire growth.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((quote) => (
              <blockquote key={quote} className="quote-card">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow dark">Contact</p>
            <h2>Visit us or ask a question.</h2>
            <ul className="contact-list">
              <li>📍 24 Concord Avenue, City Centre</li>
              <li>📞 +234 (0) 800 000 0000</li>
              <li>✉️ info@concordiaprepschool.edu</li>
              <li>🕐 Mon-Fri: 7:30 AM - 4:00 PM</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full name" aria-label="Full name" required />
            <input type="email" placeholder="Email address" aria-label="Email address" required />
            <textarea placeholder="Your message" aria-label="Your message" rows="5" />
            <button type="submit" className="button primary">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;