
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import Header from './components/Header.tsx';

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
