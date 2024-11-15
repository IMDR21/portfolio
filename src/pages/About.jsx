import Card from '../components/Card.jsx'; 
import '../About.css';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../Fonts.css'

function About() {
  const [loading, setLoading] = useState(true);

  // Simulating an API call or async operation with a timeout
  useEffect(() => {
      setTimeout(() => {
          setLoading(false); // Stop loading after 2 seconds
      }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div>
            <Spinner animation="grow" variant="secondary" size="lg" />
            
          </div>
        </div>
      ) : (
        <div className="about-container">
          <section className="profile-section">
            <Card />
          </section>
          <section className="bio-section">
            <p>
              Hello, my name is Ian and my course is BSIS 
              (Bachelor of Science in Information System). 
              I am 23 years old and I live in the Philippines. 
              This is my first time deploying a website that people can see 
              and I'm excited to show it all over the internet.
            </p>
            <p>
              Feel free to explore my portfolio and learn more about my interests, 
              skills, and achievements. I'm always eager to connect with others in the tech community!
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default About;
