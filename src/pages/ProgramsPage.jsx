import React from 'react';

const programDetails = [
  {
    title: 'Early Years Programme (Ages 2-5)',
    overview: 'Building foundations for lifelong learning through play, exploration, and discovery.',
    keyFeatures: [
      'Play-based learning approach',
      'Small class sizes (max 15 students)',
      'Bilingual instruction',
      'Daily outdoor play and exploration',
      'Parent involvement programs',
    ],
    curriculum: ['Language', 'Mathematics', 'Science', 'Creative Arts', 'Physical Dev', 'Social Learning'],
  },
  {
    title: 'Primary School Programme (Grades 1-6)',
    overview: 'Engaging instruction that develops strong academic foundations and lifelong learning skills.',
    keyFeatures: [
      'Child-centered learning methods',
      'Integrated curriculum approach',
      'Strong literacy and numeracy',
      'Arts and physical education',
      'Field trips and experiential learning',
    ],
    curriculum: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Music', 'PE', 'IT'],
  },
  {
    title: 'Middle School Programme (Grades 7-9)',
    overview: 'Rigorous academics with mentorship, preparing learners for leadership and STEM excellence.',
    keyFeatures: [
      'Subject-specialist teaching',
      'Critical thinking development',
      'Leadership programs',
      'STEM focus',
      'Career exploration',
      'Student clubs',
    ],
    curriculum: ['English', 'Mathematics', 'Science', 'History', 'Geography', 'Technology', 'Arts', 'PE'],
  },
  {
    title: 'Senior School Programme (Grades 10-12)',
    overview: 'Focused preparation for national exams, tertiary education, and career readiness.',
    keyFeatures: [
      'Advanced curriculum',
      'University preparation',
      'Subject specialization',
      'Research projects',
      'Career counseling',
      'Scholarship prep',
    ],
    curriculum: ['Core Subjects', 'Electives', 'Advanced Sciences', 'Project-Based', 'University Prep'],
  },
];

const extracurriculars = [
  { name: 'Robotics Club', icon: '🤖' },
  { name: 'Drama & Arts', icon: '🎭' },
  { name: 'Debate', icon: '🎤' },
  { name: 'Environmental', icon: '🌱' },
  { name: 'Science Club', icon: '🔬' },
  { name: 'Art & Design', icon: '🎨' },
  { name: 'Sports Teams', icon: '⚽' },
  { name: 'Music', icon: '🎵' },
  { name: 'Coding', icon: '💻' },
  { name: 'Leadership', icon: '👑' },
  { name: 'Cultural', icon: '🌍' },
  { name: 'Service', icon: '🤝' },
];

function ProgramsPage({ setCurrentPage }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Academic Programs</p>
          <h1>Learning that grows with your child</h1>
          <p className="lead">Comprehensive programs from Early Years through Senior School.</p>
        </div>
      </section>

      {programDetails.map((program) => (
        <section key={program.title} className="section">
          <div className="container program-section">
            <h2>{program.title}</h2>
            <p className="lead">{program.overview}</p>
            <div className="program-columns">
              <div>
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {program.keyFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Curriculum Areas</h3>
                <div className="curriculum-tags">
                  {program.curriculum.map((subject) => (
                    <span key={subject} className="tag">{subject}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Extracurricular Activities</p>
            <h2>Beyond the classroom: Clubs & activities.</h2>
            <p>Over 40 clubs and activities to help students explore interests.</p>
          </div>

          <div className="activities-grid">
            {extracurriculars.map((activity) => (
              <div key={activity.name} className="activity-card">
                <div className="activity-icon">{activity.icon}</div>
                <h3>{activity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramsPage;