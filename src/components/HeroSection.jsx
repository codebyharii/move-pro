import { memo } from 'react';
import '../styles/hero.css';

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Moving Made <span className="highlight">Simple</span>
          </h1>
          <p className="hero-subtitle">
            Professional packing, transport, and delivery services at your fingertips. 
            We handle the heavy lifting, you enjoy the ease.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Free Quote</button>
            <button className="btn btn-secondary">See Our Services</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="hero-card-icon">📦</div>
            <p>Safe Packing</p>
          </div>
          <div className="floating-card card-2">
            <div className="hero-card-icon">🚚</div>
            <p>Quick Delivery</p>
          </div>
          <div className="floating-card card-3">
            <div className="hero-card-icon">💰</div>
            <p>Best Prices</p>
          </div>
          <div className="hero-gradient"></div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
