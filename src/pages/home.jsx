import { Link } from 'react-router-dom';
import { Carousel, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AboutImage from '../assets/bgslides.jpg';
import EducImage from '../assets/educationslides.jpg';
import HobbyImage from '../assets/hobbyslide.jpg';
import ContImage from '../assets/contslides.jpg';
import '../home.css';
import '../Fonts.css'; 

function Home() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  // Simulating an API call or async operation with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="secondary" size="lg" />
        </div>
      ) : (
        <div className="container mt-5">
          <h1 className='font-family'>Welcome to My Website</h1>
          <p className='font-family'>This website serves as a portfolio of my personal information, education, interests, and contact information. Feel free to explore and learn more about me.</p>
          <p >Use the slider below to navigate through different sections of the website.</p>

          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
              <Link to="/about">
                <img
                  className="d-block w-100 blurred-image"
                  src={AboutImage}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>About Me</h3>
                  <p>Learn more about who I am and what I do.</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to="/education">
                <img
                  className="d-block w-100 blurred-image"
                  src={EducImage}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Educational Background</h3>
                  <p>Discover my educational background and achievements.</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to="/hobbies">
                <img
                  className="d-block w-100 blurred-image"
                  src={HobbyImage}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>My Hobbies</h3>
                  <p>Find out about my hobbies and passions.</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to="/contact">
                <img
                  className="d-block w-100 blurred-image"
                  src={ContImage}
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h3>Contact</h3>
                  <p>Get in touch with me for more information.</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </>
  );
}

export default Home;
