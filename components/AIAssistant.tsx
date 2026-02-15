
import React, { useState, useRef, useEffect } from 'react';
import { getDentalAdvice } from '../services/geminiService.ts';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Olá! Sou a assistente virtual da Dra. Tainá. Como posso te ajudar hoje?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMessage}]);
    setLoading(true);

    try {
      const aiResponse = await getDentalAdvice(userMessage);
      setMessages(prev => [...prev, {role: 'ai', text: aiResponse || ''}]);
    } catch (err) {
      setMessages(prev => [...prev, {role: 'ai', text: 'Ops, algo deu errado. Tente novamente mais tarde!'}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} text-xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[450px] animate-fade-in">
          <div className="gold-gradient p-4 text-white font-bold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-sparkles"></i>
              <span>Assistente Dra. Tainá</span>
            </div>
            <button onClick={() => setIsOpen(false)}><i className="fas fa-chevron-down"></i></button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gold text-white rounded-br-none' 
                    : 'bg-white text-gray-700 shadow-sm rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              type="text" 
              value={input}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte algo..."
              className="flex-1 bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none focus:ring-1 focus:ring-gold"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-gold text-white w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
