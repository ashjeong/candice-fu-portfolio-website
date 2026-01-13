import meditationBackground from '../assets/meditation-background.svg';
import meditation from '../assets/meditation.svg';
import "./Home.css";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>hi!</h1>
        <h1>i'm candice!</h1>
        <p>I am a passionate graphic designer and illustrator with a love for creating that brings joy to others. </p>
      </div>
      <div className="hero-image-container">
        <img
          className="hero-image hero-background"
          src={meditationBackground}
          alt="Meditation Background"
        />
        <img
          className="hero-image hero-meditation"
          src={meditation}
          alt="Meditation Character"
        />
      </div>
    </div>
  );
}

function App() {

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
