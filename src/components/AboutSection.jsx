import { memo } from 'react';
import '../styles/about.css';
import aboutImg from '../assets/about-movers.png';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImg} alt="Professional moving team carrying a box" className="about-img-actual" />
            <div className="experience-badge">
              <strong>15+</strong>
              <span>Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">Your Trusted Partner in Relocation</h2>
            <p className="about-text">
              At MovePro, we understand that moving can be one of life's most stressful events. That's why we've dedicated over a decade to perfecting the art of seamless relocation. Whether you're moving across town or across the country, our expert team ensures your belongings arrive safely and on time.
            </p>
            
            <ul className="about-features">
              <li>
                <span className="feature-icon">🛡️</span>
                <div>
                  <strong>Fully Insured & Licensed</strong>
                  <p>Complete peace of mind for your valuable possessions.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">👥</span>
                <div>
                  <strong>Professional Team</strong>
                  <p>Trained experts in packing, handling, and transport.</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">⏱️</span>
                <div>
                  <strong>On-Time Delivery</strong>
                  <p>We value your time and stick to our commitments.</p>
                </div>
              </li>
            </ul>
            
            <a href="#contact" className="btn btn-primary mt-lg">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
