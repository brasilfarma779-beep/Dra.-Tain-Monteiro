
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-nude -z-10 rounded-l-[100px] hidden lg:block"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-gray-900">
            Dra. Tainá <span className="text-gold">Monteiro</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Cirurgiã-Dentista | Especialista em Estética e Endodontia
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            Transformando sorrisos com técnica, cuidado e excelência. Experiência premium para o seu bem-estar e saúde bucal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/12974083669"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-green text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg hover:translate-y-[-2px] transition-all"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              Agendar Consulta no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="relative animate-fade-in flex flex-col">
          {/* Main Photo Container */}
          <div className="relative group self-start w-full md:w-[90%]">
            <div className="absolute -inset-4 bg-gold opacity-10 rounded-[40px] blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <img 
              src="https://i.imgur.com/KVHk2nK.jpeg" 
              alt="Dra. Tainá Monteiro" 
              className="relative w-full rounded-[40px] shadow-2xl object-cover aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
            />
          </div>

          {/* Adjusted Second Photo - Positioned below and slightly overlapping */}
          <div className="relative w-3/4 -mt-16 md:-mt-24 ml-auto border-[8px] md:border-[12px] border-white rounded-[30px] shadow-2xl overflow-hidden z-10 hover:scale-105 transition-transform duration-500 group">
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors"></div>
            <img 
              src="https://i.imgur.com/zSQIV4f.jpeg" 
              alt="Dra. Tainá Monteiro Atendimento" 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
