import ServiceCard from './ServiceCard';
import '../styles/services.css';

const SERVICES = [
  {
    id: 1,
    icon: '🏠',
    title: 'House Relocation',
    description: 'Expert household moving services with careful handling of fragile items and furniture.',
    features: ['Door-to-door service', 'Insurance included', 'Professional team']
  },
  {
    id: 2,
    icon: '💼',
    title: 'Corporate Moving',
    description: 'Specialized office relocation with minimal disruption to your business operations.',
    features: ['Equipment handling', 'After-hours service', 'IT support']
  },
  {
    id: 3,
    icon: '📦',
    title: 'Storage Solutions',
    description: 'Secure, climate-controlled storage facilities for short or long-term needs.',
    features: ['24/7 security', 'Flexible duration', 'Affordable rates']
  }
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive moving solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {SERVICES.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
