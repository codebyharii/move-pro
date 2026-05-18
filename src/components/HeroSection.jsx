import { memo } from 'react';
import '../styles/hero.css';

function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Animated background shapes */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">🚚 #1 Trusted Movers</span>
          <h1 className="hero-title">
            Moving Made <span className="highlight">Simple</span>
          </h1>
          <p className="hero-subtitle">
            Professional packing, transport, and delivery services at your fingertips. 
            We handle the heavy lifting, you enjoy the ease.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
            <a href="#services" className="btn btn-secondary">See Our Services</a>
          </div>

          {/* Trust indicators */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Central glowing orb */}
          <div className="hero-orb"></div>
          <div className="hero-orb-ring"></div>

          {/* Feature cards in a structured layout */}
          <div className="feature-card feature-card-1">
            <div className="feature-icon-wrap">
              <span>📦</span>
            </div>
            <div className="feature-text">
              <strong>Safe Packing</strong>
              <small>Multi-layer protection</small>
            </div>
          </div>

          <div className="feature-card feature-card-2">
            <div className="feature-icon-wrap">
              <span>🚚</span>
            </div>
            <div className="feature-text">
              <strong>Quick Delivery</strong>
              <small>On-time guarantee</small>
            </div>
          </div>

          <div className="feature-card feature-card-3">
            <div className="feature-icon-wrap">
              <span>💰</span>
            </div>
            <div className="feature-text">
              <strong>Best Prices</strong>
              <small>No hidden charges</small>
            </div>
          </div>

          <div className="feature-card feature-card-4">
            <div className="feature-icon-wrap">
              <span>🛡️</span>
            </div>
            <div className="feature-text">
              <strong>Insured</strong>
              <small>100% coverage</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
