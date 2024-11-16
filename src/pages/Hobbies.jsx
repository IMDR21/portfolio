import { useState, useEffect } from 'react';
import { Spinner, Card, Button, Col, Row } from 'react-bootstrap';
import '../hobbies.css';
import anime from '../assets/anime.jpg';
import game from '../assets/lor.png';
import logo from '../assets/godot_logo.png';

function Hobbies() {
  const [videoLoading, setVideoLoading] = useState(true);

  // Simulating video loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoading(false);
    }, 2000); // Adjust the timeout as needed
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="container my-5">
      {videoLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <Spinner animation="grow" variant="secondary" size="lg" />
        </div>
      ) : (
        <>
          <div className='text-box'>
            <h1 className="text-center mb-4">My Hobbies</h1>
            <p className="lead text-center mb-4">
              Here are a few of my favorite hobbies. Whether it's gaming, anime, or game development, I find joy and creativity in everything I do.
            </p>
          </div>
          {/* Hobbies List with Images */}
          <Row className="mb-5">
            {/* Gaming Hobby */}
            <Col md={4} className="mb-4">
              <Card className="hobby-card">
                <Card.Img variant="top" src={game} alt="Gaming screenshot from Legend of Runeterra" />
                <Card.Body>
                  <Card.Title>Gaming</Card.Title>
                  <Card.Text>
                    Exploring new games and genres, especially strategy and card games. I love playing games like 
                    <em>Legend of Runeterra</em>.
                  </Card.Text>
                  <Button variant="primary" href="https://playruneterra.com" target="_blank" aria-label="Play Legend of Runeterra">Play with me!</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Anime Hobby */}
            <Col md={4} className="mb-4">
              <Card className="hobby-card">
                <Card.Img variant="top" src={anime} alt="Anime poster for Dandadan" />
                <Card.Body>
                  <Card.Title>Anime</Card.Title>
                  <Card.Text>
                    The anime that I’m currently watching are
                    <a href="https://www.google.com/search?q=Dandadan" target="_blank" rel="noopener noreferrer">Dandadan</a>, 
                    <a href="https://www.google.com/search?q=Rezero" target="_blank" rel="noopener noreferrer">Re:Zero</a>, and 
                    <a href="https://www.google.com/search?q=DragonBall+Daima" target="_blank" rel="noopener noreferrer">DragonBall Daima</a>.
                  </Card.Text>
                  <Button variant="primary" href="https://myanimelist.net/" target="_blank" aria-label="Discover more anime">Discover More Anime</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Game Development Hobby */}
            <Col md={4} className="mb-4">
              <Card className="hobby-card">
                <Card.Img variant="top" src={logo} alt="Godot Engine logo" />
                <Card.Body>
                  <Card.Title>Game Development</Card.Title>
                  <Card.Text>
                    I'm currently learning game development. I created a 1v1 shooter game using C++ and SDL2 and am now working with 
                    <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">Godot Engine</a>.
                  </Card.Text>
                  <Button variant="primary" href="https://godotengine.org/" target="_blank" aria-label="Learn more about Godot Engine">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Video Section with Lazy Loading */}
          <div className="video-container d-flex justify-content-center mb-4">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/jnEuW_GNArk"
                title="YouTube video on game development"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"  // Lazy loading
              ></iframe>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center">
            I'm passionate about game development, and I love sharing my journey. I'm always looking for new projects to work on and to learn more. Feel free to reach out!
          </p>
        </>
      )}
    </div>
  );
}

export default Hobbies;
