import meditationBackground from "./assets/meditation-background.svg";
import meditation from "./assets/meditation.svg";
import "./Home.css";

function Hero() {
  return (
    <div className="hero">
      <div style={{ position: "relative" }}>
        <img
          className="hero-image"
          style={{ aspectRatio: "629/517" }}
          src={meditationBackground}
          alt="Meditation Background"
        />
        <img
          className="hero-image meditation"
          src={meditation}
          alt="Meditation Character"
        />
      </div>
      <div className="hero-text">
        <h1>hi!</h1>
        <h1>i’m candice!</h1>
        <p>
          I am a passionate graphic designer and illustrator with a love for
          creating that brings joy to others.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
