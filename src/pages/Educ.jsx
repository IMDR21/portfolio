import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';
import '../Educ.css';

import SchoolImage from '../assets/ncs1.jpg';
import SchoolImage2 from '../assets/csnhs.jpg';
import SchoolImage3 from '../assets/NCF.jpg';

function Education() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="grow" variant="secondary" size="lg" />
        </div>
      ) : (
        <div className="container mt-5">
          {/* Hero Section */}
          <header className="text-center mb-5">
            <h1 className="display-4 text-dark">My Education Journey</h1>
            <p className="lead">
              Passionate about technology, I've always been fascinated by computers, which led me to pursue a BSIS course. Here's a look at my educational background.
            </p>
          </header>

          {/* Educational Background Section */}
          <section className="mb-5">
            <h2 className="text-center text-dark mb-4">Educational Background</h2>
            <p className="text-center">
              From elementary to college, my educational path has shaped my passion for IT. Here’s a brief overview of the institutions that helped me get to where I am today.
            </p>
          </section>

          {/* Education Cards */}
          <Row className="g-4">
            <Col xs={12} md={6} lg={4}>
              <Card className="edu-card">
                <Card.Img variant="top" src={SchoolImage} alt="Naga Central School 1" />
                <Card.Body>
                  <Card.Title>Naga Central School 1</Card.Title>
                  <Card.Text>
                    I graduated from Naga Central School 1 on March 27, 2014. My early education sparked my curiosity in computers and technology.
                  </Card.Text>
                  <a href="https://www.google.com/search?q=Naga+Central+School+1" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-100">Go to Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="edu-card">
                <Card.Img variant="top" src={SchoolImage2} alt="Camarines Sur National High School" />
                <Card.Body>
                  <Card.Title>Camarines Sur National High School</Card.Title>
                  <Card.Text>
                    I graduated from high school at Camarines Sur National High School on April 3, 2020. It was here that I deepened my interest in Computer System Servicing.
                  </Card.Text>
                  <a href="https://www.google.com/search?q=Camarines+Sur+National+High+School" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-100">Go to Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="edu-card">
                <Card.Img variant="top" src={SchoolImage3} alt="Naga College Foundation" />
                <Card.Body>
                  <Card.Title>Naga College Foundation</Card.Title>
                  <Card.Text>
                    Currently, I am pursuing a BSIS course at Naga College Foundation. This program has greatly expanded my knowledge in the field of IT and computer science.
                  </Card.Text>
                  <a href="https://www.google.com/search?q=Naga+College+Foundation" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-100">Go to Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default Education;
