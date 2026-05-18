import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

// Lazy-load below-the-fold sections so the hero paints instantly
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <ServicesSection />
          <AboutSection />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
