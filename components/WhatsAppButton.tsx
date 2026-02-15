
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/12974083669"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 whatsapp-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      style={{ animationDuration: '3s' }}
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
