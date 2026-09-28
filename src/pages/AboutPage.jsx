import React from 'react';

const faculty = [
  { name: 'Mrs. Ada Thompson', role: 'Principal', bio: 'Guiding with vision for excellence and care. 20+ years in education.' },
  { name: 'Mr. Daniel Grant', role: 'Head of Academics', bio: 'Committed to rigorous curriculum and holistic growth.' },
  { name: 'Mrs. Grace Okafor', role: 'Junior School Coordinator', bio: 'Passionate about early childhood development and foundations.' },
  { name: 'Mr. James Mensah', role: 'Sports Director', bio: 'Building leadership through athletics. 15 years experience.' },
  { name: 'Ms. Zainab Hassan', role: 'Arts Coordinator', bio: 'Fostering creativity and cultural expression.' },
  { name: 'Mr. Kwame Adu', role: 'STEM Lead', bio: 'Driving innovation in science and technology.' },
];

const values = [
  { title: 'Integrity', description: 'Honesty and ethical conduct in all we do.' },
  { title: 'Excellence', description: 'Commitment to high standards in academics.' },
  { title: 'Respect', description: 'Valuing diversity and human dignity.' },
  { title: 'Service', description: 'Using talents to serve others.' },
  { title: 'Innovation', description: 'Embracing creativity and improvement.' },
  { title: 'Community', description: 'Building strong relationships.' },
];

function AboutPage() {
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
            <h2>Founded on commitment to excellence.</h2>
          </div>
          <div>
            <p>Concordia Preparatory School was established 25 years ago with a vision to create a learning environment where every child feels valued and supported. Over two decades, we have grown into one of the region's most respected institutions.</p>
            <p>Our journey has been marked by continuous innovation and an unwavering focus on developing confident, capable learners prepared to make a positive impact.</p>
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
            <p>To inspire students to discover their potential and develop into confident, compassionate, and capable individuals who can think critically, act with integrity, and contribute to their communities.</p>
            <p>We achieve this through quality education, caring mentorship, and a strong partnership between school and families.</p>
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
    </>
  );
}

export default AboutPage;