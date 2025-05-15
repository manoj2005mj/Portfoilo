import './Hero.css';
import profile from '../assets/profile.jpg';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h2>Manoj <span className="highlight">MJ</span></h2>
        <p>AI Engineer & Full Stack Developer</p>
        <div className="icons">
          <a href="mailto:manojmageesha@gmail.com">📧</a>
          <a href="https://github.com/">🐱</a>
          <a href="https://linkedin.com/">🔗</a>
        </div>
      </div>
      <img src={profile} className="profile-pic" alt="Manoj MJ" />
    </section>
  );
}

export default Hero;
