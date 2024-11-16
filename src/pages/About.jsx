import Card from '../components/Card.jsx';
import '../About.css';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../Fonts.css';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div>
            <Spinner animation="grow" variant="secondary" size="lg" aria-label="Loading..." />
          </div>
        </div>
      ) : (
        <div className="about-container container-fluid px-3">
          <section className="profile-section row justify-content-center mb-4">
            <div className="col-12 col-md-6">
              <Card />
            </div>
          </section>
          <section className="bio-section">
            <h2 className="bio-heading">About Me</h2>
            <p>
              Hello, my name is Ian, and I am pursuing a BSIS (Bachelor of Science in Information Systems) degree.
              I'm 23 years old and currently living in the Philippines. This is my first time deploying a website that people can see,
              and I am excited to share it with the world!
            </p>
            <p>
              I am passionate about technology and software development, with a strong focus on web development and systems analysis.
              I have honed my skills in technologies such as React, Node.js, and MySQL. I aim to leverage my knowledge to create 
              impactful, user-friendly digital solutions.
            </p>
            <section className="education-experience">
              <h3 className="section-heading">Education & Experience</h3>
              <p>
                I am currently pursuing a Bachelor of Science in Information Systems at NCF. 
                Throughout my studies, I have gained exposure to various aspects of IT, including software development and database management. 
              </p>
            </section>

            <p>
              Feel free to explore my portfolio and learn more about my interests, skills, and achievements. 
              I'm always eager to connect with others in the tech community!
            </p>
            <section className="skills-section">
              <h3 className="section-heading">Skills & Technologies</h3>
              <ul className="skills-list">
                <li><strong>Frontend:</strong> React, HTML, CSS, Bootstrap</li>
                <li><strong>Backend:</strong> Node.js</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>Version Control:</strong> Git, GitHub</li>
                <li><strong>Others:</strong> RESTful APIs, JWT, JWT Authentication</li>
              </ul>
            </section>
          </section>
        </div>
      )}
    </>
  );
}

export default About;
