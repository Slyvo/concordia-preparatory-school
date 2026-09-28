import React from 'react';

const programs = [
  {
    title: 'Early Years (Ages 2-5)',
    overview: 'Building foundations through play and exploration.',
    features: ['Play-based learning', 'Small class sizes (max 15)', 'Bilingual instruction', 'Daily outdoor activities'],
    subjects: ['Language', 'Math', 'Science', 'Arts', 'Physical Dev'],
  },
  {
    title: 'Primary School (Grades 1-6)',
    overview: 'Strong academic foundations with creativity and values.',
    features: ['Child-centered learning', 'Integrated curriculum', 'Strong literacy/numeracy', 'Arts and PE'],
    subjects: ['English', 'Math', 'Science', 'Social Studies', 'Arts', 'PE'],
  },
  {
    title: 'Middle School (Grades 7-9)',
    overview: 'Academic rigor with leadership development.',
    features: ['Subject specialists', 'Critical thinking', 'Leadership programs', 'STEM focus'],
    subjects: ['English', 'Math', 'Science', 'History', 'Geography', 'Arts'],
  },
  {
    title: 'Senior School (Grades 10-12)',
    overview: 'Preparation for exams, university, and careers.',
    features: ['Advanced curriculum', 'University prep', 'Specializations', 'Career counseling'],
    subjects: ['Core Subjects', 'Electives', 'Advanced Sciences', 'Project-Based'],
  },
];

const activities = [
  'Robotics Club', 'Drama', 'Debate', 'Environmental', 'Science Club', 'Art & Design',
  'Sports Teams', 'Music', 'Coding', 'Leadership', 'Cultural', 'Community Service'
];

function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Academic Programs</p>
          <h1>Learning that grows with your child</h1>
          <p className="lead">Comprehensive programs from Early Years through Senior School.</p>
        </div>
      </section>

      {programs.map((program) => (
        <section key={program.title} className="section">
          <div className="container program-section">
            <h2>{program.title}</h2>
            <p className="lead">{program.overview}</p>
            <div className="program-columns">
              <div>
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {program.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div>
                <h3>Curriculum</h3>
                <div className="curriculum-tags">
                  {program.subjects.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Clubs & Activities</p>
            <h2>40+ opportunities to explore interests.</h2>
          </div>
          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity} className="activity-card">
                <h3>{activity}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramsPage;