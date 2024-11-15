import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <Container>
        <p>&copy; 2024 IANSCAPE. All rights reserved.</p>
        <div>
          <a
            href="https://www.facebook.com/ian.delosreyes.33865"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            Facebook
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
