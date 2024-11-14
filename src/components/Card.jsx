import myImage from '../assets/RESUME.jpg';
import '../About.css';  // Import the CSS file
import '../Fonts.css'

function Card() {
  return (
    <div className="small-card">
      <img className="avatar" src={myImage} id="profile" alt="Profile" />
      <h2 className="card-title">IAN</h2>
      <p className="card-text">Student</p>
    </div>
  );
}

export default Card;
