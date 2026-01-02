import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Services } from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [contactTemplate, setContactTemplate] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceSelect = (serviceTitle: string) => {
    setContactTemplate(serviceTitle);
    
    // Scroll to contact section after a brief delay
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleTemplateUsed = () => {
    setContactTemplate(null);
  };

  return (
    <div className="min-h-screen bg-[#E6EEF1]">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Work />
      <Services onServiceSelect={handleServiceSelect} />
      <About />
      <Contact templateMessage={contactTemplate} onTemplateUsed={handleTemplateUsed} />
    </div>
  );
}
