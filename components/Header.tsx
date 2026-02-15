
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold font-serif text-gold">
          Dra. Tainá Monteiro
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="https://wa.me/12974083669" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block bg-gold text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Agendar Agora
        </a>
        
        {/* Mobile menu icon (Simplified) */}
        <div className="md:hidden text-gold text-2xl">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
