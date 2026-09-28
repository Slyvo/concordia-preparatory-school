const navItems = ['Home', 'About', 'Academics', 'Admissions', 'Faculty', 'Contact'];

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '1,200+', label: 'Students Served' },
  { value: '90%', label: 'College Placement' },
  { value: '40+', label: 'After-School Clubs' },
];

const programs = [
  {
    title: 'Early Years',
    description: 'A nurturing environment that builds curiosity, confidence, and foundational skills for young learners.',
  },
  {
    title: 'Primary School',
    description: 'Engaging, child-centered instruction that encourages literacy, numeracy, creativity, and strong values.',
  },
  {
    title: 'Middle School',
    description: 'Academic rigor with mentorship that prepares learners for leadership, STEM, and critical thinking.',
  },
  {
    title: 'Senior School',
    description: 'Focused preparation for national exams, tertiary education, and future-ready careers.',
  },
];

const admissionsSteps = [
  'Schedule a school tour and campus visit',
  'Submit the online application and required documents',
  'Attend a student assessment and family interview',
  'Receive an admission offer and complete enrollment',
];

const news = [
  {
    title: 'STEM Week Celebrates Innovation',
    date: 'September 12, 2026',
    summary: 'Students explored robotics, coding, and science through interactive sessions and community projects.',
  },
  {
    title: 'Parent-Teacher Conference Success',
    date: 'September 3, 2026',
    summary: 'Families connected with teachers to strengthen academic support and student growth plans.',
  },
  {
    title: 'School Sports Festival Highlights',
    date: 'August 27, 2026',
    summary: 'Students demonstrated teamwork, discipline, and school spirit in this exciting campus event.',
  },
];

const faculty = [
  { name: 'Mrs. Ada Thompson', role: 'Principal', bio: 'Guiding the school community with a vision for excellence, care, and purpose-led education.' },
  { name: 'Mr. Daniel Grant', role: 'Head of Academics', bio: 'Committed to a rigorous curriculum that builds depth of understanding and holistic growth.' },
  { name: 'Mrs. Grace Okafor', role: 'Junior School Coordinator', bio: 'Developing strong early learning foundations through creativity, encouragement, and structure.' },
];

const testimonials = [
  '“The teachers truly care about every child and help them grow in confidence and character.”',
  '“Concordia has created a strong balance between academic excellence and personal development.”',
  '“Our daughter feels supported, challenged, and inspired every day.”',
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <div className="brand-mark">C</div>
            <div>
              <strong>Concordia</strong>
              <span>Preparatory School</span>
            </div>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button primary small">
            Enroll Now
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Nurturing Bright Minds</p>
              <h1>Excellence in learning, leadership, and character.</h1>
              <p className="lead">
                Concordia Preparatory School inspires students to discover their potential through quality education,
                caring mentorship, and a vibrant school community.
              </p>
              <div className="cta-row">
                <a href="#admissions" className="button primary">
                  Apply for Admission
                </a>
                <a href="#about" className="button secondary">
                  Learn More
                </a>
              </div>
            </div>

            <div className="hero-card">
              <p className="card-label">School Highlights</p>
              <ul>
                <li>Small class sizes for personalized learning</li>
                <li>Strong academics with a values-based approach</li>
                <li>Sports, arts, clubs, and leadership opportunities</li>
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

        <section id="about" className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow dark">About Us</p>
              <h2>Building confident learners and responsible citizens.</h2>
            </div>
            <div>
              <p>
                At Concordia Preparatory School, we believe every child deserves a joyful, purposeful, and academically
                enriching learning experience. Our approach blends strong curriculum delivery with values such as integrity,
                excellence, respect, and service.
              </p>
              <p>
                We foster a supportive environment where students are challenged to think critically, act compassionately,
                and pursue excellence in every area of life.
              </p>
            </div>
          </div>
        </section>

        <section id="academics" className="section alt">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="section">
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

        <section id="faculty" className="section alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Faculty</p>
              <h2>Experienced educators guiding each learner.</h2>
            </div>

            <div className="faculty-grid">
              {faculty.map((member) => (
                <div className="faculty-card" key={member.name}>
                  <div className="avatar">{member.name.charAt(0)}</div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Latest News</p>
              <h2>Highlights from our school community.</h2>
            </div>

            <div className="news-grid">
              {news.map((item) => (
                <article className="news-card" key={item.title}>
                  <p className="date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
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

        <section id="contact" className="section contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow dark">Contact</p>
              <h2>Visit us or ask a question.</h2>
              <ul className="contact-list">
                <li>📍 24 Concord Avenue, City Centre</li>
                <li>📞 +234 (0) 800 000 0000</li>
                <li>✉️ info@concordiaprepschool.edu</li>
              </ul>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Full name" aria-label="Full name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <textarea placeholder="Your message" aria-label="Your message" rows="5" />
              <button type="submit" className="button primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Concordia Preparatory School</p>
          <p>Empowering learners for a brighter future.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
