import { useState, useCallback, memo } from 'react';
import '../styles/contact-form.css';

const INITIAL_FORM = { name: '', phone: '', email: '', service: '', message: '' };

// Pre-compiled regex patterns (avoids re-creation per validation call)
const PHONE_REGEX = /^[0-9]{10}$/;
const PHONE_STRIP = /[^\d]/g;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!PHONE_REGEX.test(formData.phone.replace(PHONE_STRIP, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    return newErrors;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    try {
      // Replace with your Formspree ID or API endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(INITIAL_FORM);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm]);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get Your Free Quote</h2>
          <p>Fill in your details and our team will get back to you shortly</p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <span className="checkmark">✓</span>
                Thank you! We'll be in touch soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? 'error' : ''}
              >
                <option value="">-- Select a service --</option>
                <option value="house">House Relocation</option>
                <option value="corporate">Corporate Moving</option>
                <option value="storage">Storage Solutions</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <span className="error-text">{errors.service}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your moving needs..."
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Get Free Quote'}
            </button>
          </form>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">+91 98765 43210</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">hello@movepro.in</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">Address</p>
                <p className="info-value">123 Main Street, City, State 123456</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div>
                <p className="info-label">Hours</p>
                <p className="info-value">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactForm);
