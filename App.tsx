
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIAssistant from './components/AIAssistant';
import Header from './components/Header';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header scrolled={scrolled} />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicos" className="py-20 bg-nude">
          <Services />
        </section>
        
        <section id="resultados" className="py-20">
          <Gallery />
        </section>
        
        <section id="contato" className="py-20 bg-nude">
          <ContactForm />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <AIAssistant />
    </div>
  );
};

export default App;
