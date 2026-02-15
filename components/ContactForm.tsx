
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert(`Obrigado, ${formData.nome}! Nossa equipe entrará em contato em breve.`);
    setFormData({ nome: '', email: '', telefone: '' });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="p-12 gold-gradient text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Agende sua Avaliação Completa</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Deixe seus dados e nossa equipe entrará em contato para encontrar o melhor horário para você. Sua jornada para um sorriso perfeito começa aqui.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-phone"></i>
              </div>
              <span>(12) 97408-3669</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <span>contato@drataina.com.br</span>
            </div>
          </div>
        </div>
        
        <div className="p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
              <input 
                type="text" 
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Ex: Maria Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="exemplo@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Telefone</label>
              <input 
                type="tel" 
                required
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gold text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Quero agendar minha consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
