import React, { useState } from 'react';
import { CreditCard, CheckCircle, HelpCircle, Info } from 'lucide-react';

const PricingSection = () => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  
  return (
    <section id="precios" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modelo de Uso Transparente
          </h2>
          <p className="text-lg text-gray-300">
            El agente opera bajo un modelo transparente basado en HBAR. Cada consulta 
            consume una pequeña cantidad de HBAR para cubrir los costos de la red Hedera, 
            con tarifas predecibles y sin costos ocultos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Basic plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col">
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10">
              <h3 className="text-xl font-semibold mb-2">Conexión Básica</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">0.1</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/conexión</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Perfecto para usuarios individuales que necesitan acceso ocasional 
                a información de SauceSwap.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Establecimiento de conexión con el agente</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Consultas básicas sobre SauceSwap (0.01 ℏ/consulta)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Información básica de tokens y precios</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Hasta 10 consultas por día</span>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 mr-2 text-gray-400">
                  <HelpCircle 
                    className="h-5 w-5 cursor-help" 
                    onMouseEnter={() => setShowTooltip('basic')}
                    onMouseLeave={() => setShowTooltip(null)}
                  />
                </div>
                <span className="text-gray-400">Monitoreo continuo no incluido</span>
                
                {showTooltip === 'basic' && (
                  <div className="absolute left-7 bottom-6 bg-slate-800 p-3 rounded-lg shadow-lg w-60 z-10 text-sm">
                    El monitoreo continuo permite al agente supervisar constantemente el ecosistema 
                    SauceSwap y alertarte sobre cambios importantes.
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Conectar Ahora
              </a>
            </div>
          </div>
          
          {/* Standard plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border-2 border-purple-500/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/10">
              <h3 className="text-xl font-semibold mb-2">Conexión Estándar</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">0.5</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/conexión</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Ideal para traders activos que necesitan información detallada 
                y actualizada de SauceSwap.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Todo lo incluido en Conexión Básica</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Consultas avanzadas (pools, tokens, análisis)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Información detallada de liquidez y reservas</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Hasta 50 consultas por día</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Monitoreo básico (0.1 ℏ/día)</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Conectar Ahora
              </a>
            </div>
          </div>
          
          {/* Premium plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 flex flex-col">
            <div className="p-6 bg-gradient-to-br from-teal-900/30 to-teal-800/10">
              <h3 className="text-xl font-semibold mb-2">Conexión Premium</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">1.5</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/conexión</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Para profesionales y aplicaciones que requieren monitoreo 
                continuo y alertas personalizadas.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Todo lo incluido en Conexión Estándar</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Consultas ilimitadas por día</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Monitoreo continuo 24/7 (0.3 ℏ/día)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Alertas personalizadas de precios y liquidez</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>API para integración con aplicaciones</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Conectar Ahora
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg">
              <Info className="h-6 w-6 text-blue-400" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Beneficios de Sostenibilidad</h3>
              <p className="text-gray-300">
                Las tarifas permiten mantener el servicio activo 24/7, garantizando 
                actualizaciones constantes y acceso a la información más reciente del 
                ecosistema SauceSwap y Hedera. Además, contribuyen al mantenimiento 
                de la infraestructura y el desarrollo continuo de nuevas funcionalidades.
              </p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Transparencia Total</div>
                  <p className="text-sm text-gray-400">
                    Todas las tarifas son visibles y predecibles, sin costos ocultos.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Modelo Pay-as-you-go</div>
                  <p className="text-sm text-gray-400">
                    Solo pagas por lo que usas, sin cuotas mensuales fijas.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Actualizaciones Continuas</div>
                  <p className="text-sm text-gray-400">
                    Acceso a nuevas funcionalidades y mejoras sin costo adicional.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 border-t border-slate-700 pt-6 flex items-center justify-between">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-purple-400 mr-2" />
              <span>Pagos automáticos mediante HBAR desde tu cuenta de Hedera</span>
            </div>
            
            <a 
              href="#preguntas" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;