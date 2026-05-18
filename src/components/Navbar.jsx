import { useState, useCallback, memo } from 'react';
import '../styles/navbar.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home', active: true },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <span className="logo-icon">📦</span>
          MovePro
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="nav-item">
              <a href={link.href} className={`nav-link${link.active ? ' active' : ''}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="btn btn-primary nav-cta">Get Free Quote</button>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu — always in DOM, toggled via CSS for smooth transition */}
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary" style={{ width: '100%' }}>
          Get Free Quote
        </button>
      </div>
    </nav>
  );
}

export default memo(Navbar);
