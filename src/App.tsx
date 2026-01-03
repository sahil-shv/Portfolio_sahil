import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E6EEF1]">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </div>
  );
}