import { Link } from 'react-router-dom';
import { Carousel, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AboutImage from '../assets/bgslides.jpg';
import EducImage from '../assets/educationslides.jpg';
import HobbyImage from '../assets/hobbyslide.jpg';
import ContImage from '../assets/contslides.jpg';
import '../home.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
  
    // Cleanup the timer when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []);
  

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div>
            <Spinner animation="grow" variant="secondary" size="lg" />
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className='text-box'>
          <h1 className='font-family'>Welcome to My Website</h1>
          <p className='font-family'>This website serves as a portfolio of my personal information, education, interests, and contact information. Feel free to explore and learn more about me.</p>
          </div>
          <p className='font-family'>Use the slider below to navigate through different sections of the website.</p>

          <Carousel activeIndex={index} onSelect={handleSelect} fade aria-label='Welcome to My Website'>
            <Carousel.Item>
              <Link to="/about" aria-label='Learn more about me'>
                <img
                  className="d-block w-100 blurred-image"
                  src={AboutImage}
                  alt="A description of me"
                  loading='lazy'
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
                  alt="My educational background"
                  loading='lazy'
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
                  alt="My hobbies and passions"
                  loading='lazy'
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
                  alt="Contact information"
                  loading='lazy'
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
