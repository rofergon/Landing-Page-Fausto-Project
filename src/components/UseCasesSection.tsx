import React, { useState } from 'react';
import { LineChart, Code, BarChart3, GraduationCap } from 'lucide-react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const cases = [
    {
      title: "Trader DeFi",
      icon: <LineChart className="h-6 w-6 text-blue-400" />,
      description: "Accede a información actualizada sobre pools, liquidez y precios para tomar decisiones informadas en tiempo real.",
      examples: [
        "Monitoreo de precios y liquidez en tiempo real",
        "Análisis de oportunidades de arbitraje",
        "Alertas de cambios significativos en pools",
        "Visualización del historial de precios"
      ],
      color: "blue"
    },
    {
      title: "Desarrollador",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      description: "Integra el agente en tu aplicación para proporcionar datos actualizados de SauceSwap a tus usuarios.",
      examples: [
        "API para integración en aplicaciones web/móviles",
        "Monitoreo de cambios en smart contracts",
        "Notificaciones push para usuarios",
        "Datos en tiempo real para dashboards"
      ],
      color: "purple"
    },
    {
      title: "Analista de Mercado",
      icon: <BarChart3 className="h-6 w-6 text-teal-400" />,
      description: "Monitorea las tendencias de liquidez y precios en el ecosistema de Hedera.",
      examples: [
        "Análisis de volumen y liquidez por pool",
        "Seguimiento de tendencias de precios",
        "Informes periódicos de actividad",
        "Comparativas entre diferentes tokens"
      ],
      color: "teal"
    },
    {
      title: "Educador Blockchain",
      icon: <GraduationCap className="h-6 w-6 text-indigo-400" />,
      description: "Utiliza el agente como herramienta educativa para explicar conceptos DeFi en Hedera.",
      examples: [
        "Ejemplos prácticos de funcionamiento de DEX",
        "Visualización de conceptos de liquidez y impermanent loss",
        "Demostraciones de comunicación HCS en tiempo real",
        "Casos de estudio para estudiantes"
      ],
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aplicaciones Prácticas
          </h2>
          <p className="text-lg text-gray-300">
            Descubre cómo diferentes tipos de usuarios pueden aprovechar el 
            Agente HCS-10 para mejorar su experiencia con SauceSwap y el ecosistema de Hedera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col space-y-0 space-x-4 lg:space-y-3 lg:space-x-0 overflow-x-auto pb-4 lg:pb-0">
            {cases.map((useCase, index) => (
              <button
                key={index}
                className={`min-w-[140px] lg:min-w-0 p-4 rounded-lg border text-left transition-all duration-300 ${
                  activeTab === index
                    ? `bg-${useCase.color}-900/30 border-${useCase.color}-500/50 shadow-lg shadow-${useCase.color}-500/5`
                    : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center">
                  <div className="mr-3">{useCase.icon}</div>
                  <span className="font-medium">{useCase.title}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="lg:col-span-4">
            <div className={`bg-slate-800/30 backdrop-blur-sm rounded-xl border border-${cases[activeTab].color}-500/30 p-8`}>
              <div className="flex items-start mb-6">
                <div className={`p-3 bg-${cases[activeTab].color}-500/20 rounded-lg mr-4`}>
                  {cases[activeTab].icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{cases[activeTab].title}</h3>
                  <p className="text-gray-300">{cases[activeTab].description}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Casos de Uso Específicos</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cases[activeTab].examples.map((example, index) => (
                    <div 
                      key={index}
                      className={`bg-slate-800/50 p-4 rounded-lg border border-${cases[activeTab].color}-500/20 flex items-start`}
                    >
                      <div className={`w-6 h-6 rounded-full bg-${cases[activeTab].color}-500/30 flex items-center justify-center mr-3 text-sm font-medium`}>
                        {index + 1}
                      </div>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="flex items-center mb-2">
                  <div className={`w-3 h-3 rounded-full bg-${cases[activeTab].color}-400 mr-2`}></div>
                  <h4 className="font-medium">Ejemplo de Interacción</h4>
                </div>
                
                <div className="font-mono text-sm mt-3 bg-slate-900 p-3 rounded border border-slate-700 overflow-x-auto whitespace-pre">
                  {activeTab === 0 && (
                    <div>
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">getPoolInfo</span>(<span className="text-green-400">"HBAR/SAUCE"</span>)
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Pool #123:</span> HBAR/SAUCE
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Liquidez:</span> $1.2M
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Reservas:</span> 450K HBAR, 8.5M SAUCE
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Variación 24h:</span> +2.4%
                    </div>
                  )}
                  
                  {activeTab === 1 && (
                    <div>
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">import</span> {`{ HCS10Agent }`} <span className="text-blue-400">from</span> <span className="text-green-400">'hcs10-client'</span>;
                      {"\n"}
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-purple-400">const</span> agent = <span className="text-blue-400">new</span> <span className="text-yellow-400">HCS10Agent</span>();
                      {"\n"}
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">await</span> agent.<span className="text-yellow-400">connect</span>(<span className="text-green-400">"0.0.XXXXX"</span>);
                      {"\n"}
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-purple-400">const</span> pools = <span className="text-blue-400">await</span> agent.<span className="text-yellow-400">getPools</span>({`{ limit: 10 }`});
                      {"\n"}
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">app</span>.listen(<span className="text-green-400">"Pools actualizados"</span>, pools);
                    </div>
                  )}
                  
                  {activeTab === 2 && (
                    <div>
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">getLiquidityTrend</span>(<span className="text-green-400">"HBAR"</span>, <span className="text-orange-400">30</span>)
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Análisis de liquidez para HBAR (30 días):</span>
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Tendencia:</span> +15.3% (incremento sostenido)
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Picos:</span> 12-may ($4.2M), 24-may ($3.8M)
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Correlación precio/liquidez:</span> 0.72 (alta)
                    </div>
                  )}
                  
                  {activeTab === 3 && (
                    <div>
                      <span className="text-gray-400">&gt; </span>
                      <span className="text-blue-400">explainConcept</span>(<span className="text-green-400">"impermanent loss"</span>, <span className="text-green-400">"HBAR/USDC"</span>)
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Impermanent Loss explicado con pool HBAR/USDC:</span>
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      Si hubieras mantenido 10,000 HBAR ($700) y 700 USDC
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      vs. añadirlos al pool cuando HBAR=$0.07, y HBAR sube a $0.09:
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Valor como LP:</span> $1,431
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">Valor HODL:</span> $1,460
                      {"\n"}
                      <span className="text-gray-400">&lt; </span>
                      <span className="text-purple-400">IL calculado:</span> 1.98%
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <a 
                    href="#conectar" 
                    className={`px-4 py-2 bg-${cases[activeTab].color}-600 hover:bg-${cases[activeTab].color}-500 rounded-lg text-white font-medium transition-colors`}
                  >
                    Probar este caso de uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;