
import React from 'react';

const services = [
  {
    title: 'Clareamento Dental',
    icon: 'fa-sun',
    description: 'Recupere o brilho e a brancura natural do seu sorriso com técnicas seguras e eficazes.'
  },
  {
    title: 'Lentes de Contato Dental',
    icon: 'fa-tooth',
    description: 'Transformação estética de alto padrão para correção de cor, formato e alinhamento.'
  },
  {
    title: 'Tratamento de Canal',
    icon: 'fa-microscope',
    description: 'Endodontia especializada com uso de tecnologia para salvar dentes e eliminar dores.'
  },
  {
    title: 'Limpeza e Prevenção',
    icon: 'fa-hand-sparkles',
    description: 'Cuidados periódicos essenciais para manter sua saúde gengival e prevenir doenças.'
  },
  {
    title: 'Restaurações Estéticas',
    icon: 'fa-gem',
    description: 'Reconstrução de dentes com resinas de alta tecnologia que imitam a anatomia natural.'
  },
  {
    title: 'Avaliação Personalizada',
    icon: 'fa-clipboard-user',
    description: 'Check-up completo com planejamento digital para entender exatamente o que você precisa.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold font-bold tracking-widest uppercase text-sm">Especialidades</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Nossos Serviços</h2>
        <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-nude rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
              <i className={`fas ${service.icon} text-2xl text-gold group-hover:text-white transition-colors duration-300`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
