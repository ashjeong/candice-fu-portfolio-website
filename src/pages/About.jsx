import aboutDrawing from '../assets/about-drawing.png';
import pfpCandice from '../assets/pfp-candice.jpg';
import "./About.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img
          className="about-hero-image"
          src={aboutDrawing}
          alt="About Drawing"
        />
      </div>
      <div className="about-hero-text">
        <h2>hi, i'm candice!</h2>
        <p>I am a passionate graphic designer and illustrator with a love for creating meaningful and visually engaging work that brings joy to others. </p>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img
          className="pfp-image"
          src={pfpCandice}
          alt="Profile Picture of Candice Fu"
        />
      </div>
      <div className="pfp-text">
        <p>I graduated from the Rochester Institute of Technology in 2023 with a BFA in Graphic Design and a minor in Advertising and Public Relations. Currently, I am working as a junior designer at Arnold NY, where I have the opportunity to further refine my design skills and contribute to impactful projects. </p>
        <p>As a designer, I’m constantly striving to push my creative boundaries and produce work of the highest quality. I enjoy exploring various aspects of design to continually improve my craft and expand my capabilities. In my personal projects, I like to add a bit of fun and humor, bringing a unique and playful perspective to my designs!</p>
      </div>
    </div>
  );
}


function About() {

  return (
    <>
      <Hero />
      <AboutContent />
    </>
  );
}

export default About;
