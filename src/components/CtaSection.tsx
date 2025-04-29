import React from 'react';
import { ArrowRight, Cpu, ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="conectar" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
            Comienza a Explorar SauceSwap con tu Agente Personal
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conecta ahora con tu agente HCS-10 personalizado y desbloquea todo el potencial 
            de SauceSwap y el ecosistema DeFi de Hedera. Información en tiempo real, análisis 
            detallados y respuestas inteligentes a tus consultas, todo en un solo lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#conectar" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 flex items-center justify-center group"
            >
              Conectar con el Agente
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#documentacion" 
              className="px-8 py-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-medium transition-colors flex items-center justify-center"
            >
              <Cpu className="mr-2 h-5 w-5" />
              Ver Documentación Técnica
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <span className="text-blue-400 font-medium">1</span>
              </div>
              <h3 className="font-semibold text-lg">Conecta tu Cuenta</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Establece una conexión segura con el agente HCS-10 utilizando tu 
              cuenta de Hedera y comienza a interactuar inmediatamente.
            </p>
            <a 
              href="#iniciar" 
              className="text-blue-400 flex items-center hover:text-blue-300 transition-colors"
            >
              <span>Ver guía de inicio</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <span className="text-purple-400 font-medium">2</span>
              </div>
              <h3 className="font-semibold text-lg">Explora SauceSwap</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Accede a información detallada sobre pools, tokens, precios y 
              liquidez en tiempo real para optimizar tus decisiones DeFi.
            </p>
            <a 
              href="#sauceswap" 
              className="text-purple-400 flex items-center hover:text-purple-300 transition-colors"
            >
              <span>Ver capacidades SauceSwap</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                <span className="text-teal-400 font-medium">3</span>
              </div>
              <h3 className="font-semibold text-lg">Automatiza Procesos</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Configura alertas personalizadas, monitoreo continuo y 
              notificaciones para mantenerte al día con el ecosistema de Hedera.
            </p>
            <a 
              href="#precios" 
              className="text-teal-400 flex items-center hover:text-teal-300 transition-colors"
            >
              <span>Ver planes disponibles</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <Cpu className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Listo para Potenciar tu Experiencia DeFi?</h3>
              <p className="text-gray-300 mb-4 text-center md:text-left">
                Únete a los cientos de usuarios que ya están aprovechando la potencia 
                del Agente HCS-10 para optimizar sus operaciones en SauceSwap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#conectar" 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-medium transition-all duration-300 flex items-center justify-center"
                >
                  Comenzar Ahora
                </a>
                
                <a 
                  href="#iniciar" 
                  className="px-6 py-3 rounded-lg bg-transparent border border-slate-600 hover:border-slate-500 text-white font-medium transition-colors flex items-center justify-center"
                >
                  Ver Demostración
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;