import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

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
    <div>
      {videoLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="secondary" size="lg" />
        </div>
      ) : (
        <>
          <h2>My Hobbies</h2>
          <p>
            I have a few hobbies that I enjoy in my free time. Some of these include gaming, watching anime, and going out with friends. 
            I enjoy exploring new games and discovering different genres. I quite like playing card games, specifically Legend of Runeterra. If
            someone wants to play with me, that would be nice! I'm currently watching 
            <a href="https://www.google.com/search?q=Dandadan">Dandadan</a>, 
            <a href="https://www.google.com/search?q=Rezero">Rezero</a>, 
            <a href="https://www.google.com/search?q=DragonBall+Daima">DragonBall Daima</a>, and 
            <a href="https://www.google.com/search?q=Arcane">Arcane</a> Season 2.
          </p>
          <p>
            In addition to those hobbies, I also try learning game development. During my first year, we had a project to create a game for class. 
            I really enjoyed the experience of building the game, a 1-on-1 shooter that I named "Tank Warfare," using C++ and SDL2.
          </p>

          {/* Video section */}
          <div className="video-container">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/jnEuW_GNArk"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            Currently, I'm still pursuing game development and working on a learning project in <a href="https://www.google.com/search?q=Godot">Godot</a>. 
            I started developing a game but had to pause due to time constraints. However, I'm determined to finish it and won't give up on making it happen.
          </p>
          <p>
            Game development is something I truly enjoy, and I look forward to continuing to learn more about it.
          </p>
        </>
      )}
    </div>
  );
}

export default Hobbies;
