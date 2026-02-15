
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gold">Dra. Tainá Monteiro</h2>
            <p className="text-gray-500 mt-2">Cuidado integral com o seu sorriso.</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/dra.tainamonteiro?igsh=NHBmOHFyMm96MHNl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-nude text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://wa.me/12974083669" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-nude text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="text-center border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Dra. Tainá Monteiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
