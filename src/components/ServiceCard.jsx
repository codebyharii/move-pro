import { memo } from 'react';
import '../styles/service-card.css';

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="service-card">
      <div className="svc-card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      <ul className="card-features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <span className="checkmark">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <a href="#contact" className="btn btn-secondary card-btn">Learn More</a>
    </div>
  );
}

export default memo(ServiceCard);
