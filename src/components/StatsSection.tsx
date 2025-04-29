import React, { useEffect, useState } from 'react';
import { Users, MessageSquare, Activity, Clock } from 'lucide-react';

const StatsSection = () => {
  const [connections, setConnections] = useState(12);
  const [messages, setMessages] = useState(327);
  const [uptime, setUptime] = useState(99.8);
  const [responseTime, setResponseTime] = useState(1.2);
  
  // Simulate changing stats
  useEffect(() => {
    const interval = setInterval(() => {
      setConnections(prev => Math.floor(Math.random() * 3) - 1 + prev);
      setMessages(prev => prev + Math.floor(Math.random() * 5));
      setUptime(prev => Math.min(100, Math.max(99.5, prev + (Math.random() * 0.2 - 0.1))));
      setResponseTime(prev => Math.max(0.8, Math.min(2.0, prev + (Math.random() * 0.4 - 0.2))));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rendimiento en Números
          </h2>
          <p className="text-lg text-gray-300">
            Métricas en tiempo real sobre el rendimiento y la actividad del agente HCS-10.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connections */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="bg-blue-500/10 px-2 py-1 rounded text-blue-400 text-xs font-medium">
                En tiempo real
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">Conexiones Activas</h3>
            <div className="flex items-end">
              <div className="text-4xl font-bold">{connections}</div>
              <div className="text-green-400 ml-2 mb-1 flex items-center text-sm">
                <Activity className="h-4 w-4 mr-0.5" />
                <span>Activas</span>
              </div>
            </div>
            
            <div className="mt-4 h-10">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Última hora</span>
              </div>
              <div className="relative h-6 w-full">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bottom-0 bg-blue-500/60 rounded-sm"
                    style={{ 
                      height: `${10 + Math.sin(i/3) * 6 + Math.random() * 8}px`,
                      width: '6px',
                      left: `${i * (100/24)}%`,
                      opacity: i === 23 ? '1' : '0.6'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-400" />
              </div>
              <div className="bg-purple-500/10 px-2 py-1 rounded text-purple-400 text-xs font-medium">
                Hoy
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">Mensajes Procesados</h3>
            <div className="flex items-end">
              <div className="text-4xl font-bold">{messages}</div>
              <div className="text-purple-400 ml-2 mb-1 flex items-center text-sm">
                <Activity className="h-4 w-4 mr-0.5" />
                <span>+{Math.floor(messages/24)}/hora</span>
              </div>
            </div>
            
            <div className="mt-4 h-10">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Últimas 24 horas</span>
              </div>
              <div className="relative h-6 w-full">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bottom-0 bg-purple-500/60 rounded-sm"
                    style={{ 
                      height: `${8 + Math.sin(i/2) * 8 + Math.random() * 10}px`,
                      width: '6px',
                      left: `${i * (100/24)}%`,
                      opacity: i === 23 ? '1' : '0.6'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Response Time */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-teal-500/20 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-teal-400" />
              </div>
              <div className="bg-teal-500/10 px-2 py-1 rounded text-teal-400 text-xs font-medium">
                Promedio
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">Tiempo de Respuesta</h3>
            <div className="flex items-end">
              <div className="text-4xl font-bold">{responseTime.toFixed(1)}</div>
              <div className="text-teal-400 ml-2 mb-1 flex items-center text-sm">
                <span>segundos</span>
              </div>
            </div>
            
            <div className="mt-4 h-10">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Última hora</span>
              </div>
              <div className="relative h-6 w-full">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bottom-0 bg-teal-500/60 rounded-sm"
                    style={{ 
                      height: `${5 + Math.sin(i/4) * 15 + Math.random() * 6}px`,
                      width: '6px',
                      left: `${i * (100/24)}%`,
                      opacity: i === 23 ? '1' : '0.6'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Uptime */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Activity className="h-6 w-6 text-green-400" />
              </div>
              <div className="bg-green-500/10 px-2 py-1 rounded text-green-400 text-xs font-medium">
                30 días
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-300 mb-2">Uptime</h3>
            <div className="flex items-end">
              <div className="text-4xl font-bold">{uptime.toFixed(1)}%</div>
              <div className="text-green-400 ml-2 mb-1 flex items-center text-sm">
                <Activity className="h-4 w-4 mr-0.5" />
                <span>Estable</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Últimos 30 días</span>
                <span>Objetivo: 99.9%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full" 
                  style={{ width: `${uptime}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">Consultas SauceSwap Procesadas</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Consultas de Pools</span>
                  <span className="text-blue-400">187</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Información de Tokens</span>
                  <span className="text-purple-400">135</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Consultas de Precios</span>
                  <span className="text-teal-400">212</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Análisis de Liquidez</span>
                  <span className="text-indigo-400">94</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">Distribución de Consultas</h3>
            
            <div className="relative h-52">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-8 border-slate-700/50 flex items-center justify-center text-xl font-medium">
                  {messages}
                </div>
                
                {/* Chart segments */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,50 L50,0 A50,50 0 0,1 85,15 Z" fill="#3B82F6" opacity="0.8" />
                    <path d="M50,50 L85,15 A50,50 0 0,1 100,50 Z" fill="#8B5CF6" opacity="0.8" />
                    <path d="M50,50 L100,50 A50,50 0 0,1 85,85 Z" fill="#14B8A6" opacity="0.8" />
                    <path d="M50,50 L85,85 A50,50 0 0,1 50,100 Z" fill="#6366F1" opacity="0.8" />
                    <path d="M50,50 L50,100 A50,50 0 0,1 15,85 Z" fill="#10B981" opacity="0.8" />
                    <path d="M50,50 L15,85 A50,50 0 0,1 0,50 Z" fill="#F472B6" opacity="0.8" />
                    <path d="M50,50 L0,50 A50,50 0 0,1 15,15 Z" fill="#F97316" opacity="0.8" />
                    <path d="M50,50 L15,15 A50,50 0 0,1 50,0 Z" fill="#EF4444" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 mr-2 rounded-sm"></div>
                <span>SauceSwap</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 mr-2 rounded-sm"></div>
                <span>Tokens</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 mr-2 rounded-sm"></div>
                <span>Precios</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 mr-2 rounded-sm"></div>
                <span>Conexiones</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></div>
                <span>Clima</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 mr-2 rounded-sm"></div>
                <span>Otros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;