import React from 'react';

const faculty = [
  { name: 'Mrs. Ada Thompson', role: 'Principal', bio: 'Guiding the school community with a vision for excellence, care, and purpose-led education. Over 20 years in educational leadership.' },
  { name: 'Mr. Daniel Grant', role: 'Head of Academics', bio: 'Committed to a rigorous curriculum that builds depth of understanding and holistic growth. Specializes in curriculum innovation.' },
  { name: 'Mrs. Grace Okafor', role: 'Junior School Coordinator', bio: 'Developing strong early learning foundations through creativity, encouragement, and structure. Passionate about early childhood development.' },
  { name: 'Mr. James Mensah', role: 'Sports Director', bio: 'Building student leadership and teamwork through athletics and wellness programs. Certified coach with 15 years experience.' },
  { name: 'Ms. Zainab Hassan', role: 'Arts Coordinator', bio: 'Fostering creativity and cultural expression through visual arts, music, and performance. Dedicated to student artistic development.' },
  { name: 'Mr. Kwame Adu', role: 'STEM Lead', bio: 'Driving innovation in science, technology, engineering, and mathematics. Passionate about preparing students for future careers.' },
];

const values = [
  { title: 'Integrity', description: 'Honesty, transparency, and ethical conduct in all we do.' },
  { title: 'Excellence', description: 'Commitment to high standards in academics and character.' },
  { title: 'Respect', description: 'Valuing diversity and treating all members of the community with dignity.' },
  { title: 'Service', description: 'Using our talents to serve others and contribute to society.' },
  { title: 'Innovation', description: 'Embracing creativity and continuous improvement.' },
  { title: 'Community', description: 'Building strong relationships and supporting one another.' },
];

function AboutPage({ setCurrentPage }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Concordia</p>
          <h1>Our Story, Mission & Values</h1>
          <p className="lead">Building a legacy of excellence, one student at a time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow dark">Our Story</p>
            <h2>Founded on a commitment to educational excellence.</h2>
          </div>
          <div>
            <p>
              Concordia Preparatory School was established 25 years ago with a simple vision: to create a learning
              environment where every child feels valued, challenged, and supported. Over two decades, we have grown from
              a small community school to one of the region's most respected educational institutions.
            </p>
            <p>
              Our journey has been marked by continuous innovation, a steadfast commitment to our values, and an
              unwavering focus on developing well-rounded, confident learners who are prepared to make a positive
              impact on the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two-column">
          <div>
            <p className="eyebrow dark">Our Mission</p>
            <h2>Inspiring tomorrow's leaders.</h2>
          </div>
          <div>
            <p>
              To inspire students to discover their potential and develop into confident, compassionate, and capable
              individuals who can think critically, act with integrity, and contribute meaningfully to their communities.
            </p>
            <p>
              We achieve this through quality education, caring mentorship, a nurturing learning environment, and a
              strong partnership between school and families.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Our Values</p>
            <h2>Principles that guide everything we do.</h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Faculty & Staff</p>
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
        <div className="container two-column">
          <div>
            <p className="eyebrow dark">Why Choose Concordia?</p>
            <h2>A complete education for complete growth.</h2>
          </div>
          <div>
            <ul className="feature-list">
              <li><strong>Personalized Learning:</strong> Small class sizes ensure every student receives attention.</li>
              <li><strong>Holistic Development:</strong> We nurture academic, social, emotional, and physical growth.</li>
              <li><strong>Experienced Faculty:</strong> Our teachers are qualified, passionate, and student-focused.</li>
              <li><strong>Modern Facilities:</strong> Well-equipped classrooms, labs, sports grounds, and arts spaces.</li>
              <li><strong>Values-Based Education:</strong> Character formation is at the heart of our curriculum.</li>
              <li><strong>Parent Partnership:</strong> We work closely with families to support each student's journey.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;