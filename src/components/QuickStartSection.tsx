import React, { useState } from 'react';
import { MessageSquare, ChevronRight, ArrowRight, Code, Search, Database } from 'lucide-react';

const QuickStartSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [exampleQuery, setExampleQuery] = useState("Muéstrame los pools de SauceSwap");
  
  const examples = [
    "Muéstrame los pools de SauceSwap",
    "¿Cuáles son los detalles del pool #123?",
    "¿Qué información tienes sobre el token 0.0.731861?",
    "¿Cuáles son los pools asociados con HBAR?"
  ];
  
  const handleExampleClick = (example: string) => {
    setExampleQuery(example);
  };

  return (
    <section id="iniciar" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo Interactuar con el Agente
          </h2>
          <p className="text-lg text-gray-300">
            Interactuar con mi agente HCS-10 es sencillo. Puedes establecer una conexión 
            usando su Account ID, y comenzar a enviar mensajes inmediatamente. El agente 
            responderá de forma inteligente, proporcionando información en tiempo real 
            sobre SauceSwap, DeFi y otros temas relevantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 1 
                  ? 'bg-blue-900/20 border-blue-500/50 shadow-lg shadow-blue-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-blue-500/30'
              }`}
              onClick={() => setActiveStep(1)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 1 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>1</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Establece una conexión con el agente</h3>
                <p className="text-gray-400">
                  Utiliza el ID del agente (0.0.XXXXX) para iniciar una conexión a través 
                  de cualquier cliente compatible con HCS-10.
                </p>
                {activeStep === 1 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      <span className="text-blue-400">connect</span>(<span className="text-green-400">"0.0.XXXXX"</span>);
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 2 
                  ? 'bg-purple-900/20 border-purple-500/50 shadow-lg shadow-purple-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-purple-500/30'
              }`}
              onClick={() => setActiveStep(2)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 2 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>2</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Espera la confirmación automática</h3>
                <p className="text-gray-400">
                  El agente procesará tu solicitud de conexión automáticamente y 
                  establecerá un canal seguro de comunicación.
                </p>
                {activeStep === 2 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <span className="font-mono text-sm text-green-400">
                        Conexión establecida con el Agente HCS-10 (0.0.XXXXX)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 3 
                  ? 'bg-teal-900/20 border-teal-500/50 shadow-lg shadow-teal-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-teal-500/30'
              }`}
              onClick={() => setActiveStep(3)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 3 ? 'bg-teal-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>3</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Comienza a enviar consultas</h3>
                <p className="text-gray-400">
                  Envía consultas sobre SauceSwap, tokens o DeFi y recibe respuestas 
                  detalladas con información actualizada.
                </p>
                {activeStep === 3 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      <span className="text-teal-400">sendMessage</span>(<span className="text-green-400">"{exampleQuery}"</span>);
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 4 
                  ? 'bg-indigo-900/20 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-indigo-500/30'
              }`}
              onClick={() => setActiveStep(4)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 4 ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>4</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Recibe respuestas detalladas</h3>
                <p className="text-gray-400">
                  El agente procesará tu consulta y te proporcionará respuestas 
                  detalladas con datos en tiempo real.
                </p>
                {activeStep === 4 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700 max-h-40 overflow-y-auto">
                    <div className="text-sm">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-4 w-4 text-indigo-400 mr-2" />
                        <span className="text-indigo-400 font-medium">Respuesta del Agente:</span>
                      </div>
                      <p>
                        Aquí tienes los principales pools de SauceSwap ordenados por liquidez:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #456: HBAR/USDC - $3.4M en liquidez</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #123: HBAR/SAUCE - $1.2M en liquidez</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #789: SAUCE/USDC - $850K en liquidez</span>
                        </li>
                      </ul>
                      <p className="mt-2">
                        ¿Deseas información detallada sobre algún pool específico?
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right side - Example queries */}
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6">Ejemplos de Consultas</h3>
            
            <div className="space-y-4">
              {examples.map((example, index) => (
                <button
                  key={index}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-300 flex items-start ${
                    exampleQuery === example
                      ? 'bg-blue-900/20 border-blue-500/50'
                      : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-blue-500/30'
                  }`}
                  onClick={() => handleExampleClick(example)}
                >
                  <div className="mr-3 flex-shrink-0">
                    {index === 0 && <Search className="h-5 w-5 text-blue-400" />}
                    {index === 1 && <Database className="h-5 w-5 text-purple-400" />}
                    {index === 2 && <Code className="h-5 w-5 text-teal-400" />}
                    {index === 3 && <MessageSquare className="h-5 w-5 text-indigo-400" />}
                  </div>
                  <div className="flex-1">
                    <p>{example}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-800/30">
              <h4 className="font-medium text-lg mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-blue-400" />
                <span>Integración en tu Aplicación</span>
              </h4>
              
              <p className="text-gray-300 text-sm mb-4">
                También puedes integrar el agente HCS-10 directamente en tu aplicación 
                utilizando nuestra librería JavaScript:
              </p>
              
              <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-800 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-300">
                  <span className="text-blue-400">import</span> {`{ HCS10Agent }`} <span className="text-blue-400">from</span> <span className="text-green-400">'hcs10-client'</span>;{'\n\n'}
                  <span className="text-purple-400">const</span> <span className="text-blue-300">agent</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">HCS10Agent</span>{'();\n\n'}
                  <span className="text-teal-300">{'// Conectar con el agente\n'}</span>
                  <span className="text-blue-400">await</span> agent.<span className="text-yellow-300">connect</span>(<span className="text-green-400">"0.0.XXXXX"</span>);{'\n\n'}
                  <span className="text-teal-300">{'// Enviar consulta y recibir respuesta\n'}</span>
                  <span className="text-blue-400">const</span> <span className="text-blue-300">response</span> = <span className="text-blue-400">await</span> agent.<span className="text-yellow-300">sendMessage</span>(<span className="text-green-400">"Muéstrame los pools de SauceSwap"</span>);{'\n\n'}
                  <span className="text-blue-300">console</span>.<span className="text-yellow-300">log</span>(response);
                </pre>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="#documentacion" 
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Ver documentación completa</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;