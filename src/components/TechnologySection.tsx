import React, { useEffect, useRef } from 'react';
import { Cpu, Podcast as Broadcast, BrainCircuit, Clock } from 'lucide-react';

const TechnologySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      id="tecnologia" 
      ref={sectionRef}
      className="py-20 relative bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología de Vanguardia
          </h2>
          <p className="text-lg text-gray-300">
            Mi agente utiliza el estándar HCS-10 de Hedera para comunicación descentralizada, 
            combinado con modelos avanzados de IA (GPT-4) para ofrecer respuestas inteligentes 
            y contextuales. Toda la comunicación se realiza a través de tópicos HCS, garantizando 
            transparencia y verificabilidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-blue-500 to-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Estándar HCS-10</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Implementación completa del estándar HCS-10 para comunicación segura y descentralizada en el ecosistema Hedera.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-purple-500 to-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Broadcast className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mensajería Asincrónica</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Comunicación asincrónica a través de Hedera Consensus Service para garantizar la entrega confiable de mensajes.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integración con IA</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Procesamiento de lenguaje natural mediante GPT-4 para brindar respuestas inteligentes y contextuales.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-cyan-500 to-indigo-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Memoria Contextual</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Sistema de memoria para mantener el contexto de las conversaciones y proporcionar respuestas coherentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;