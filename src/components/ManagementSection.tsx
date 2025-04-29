import React from 'react';
import { CheckCircle2, BellRing, Zap, RefreshCcw, UserCheck } from 'lucide-react';

const ManagementSection = () => {
  return (
    <section className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gestión Inteligente
          </h2>
          <p className="text-lg text-gray-300">
            El agente gestiona automáticamente sus conexiones, solicitudes entrantes y mensajes, 
            utilizando IA para determinar las acciones apropiadas. Monitorea continuamente su 
            tópico de entrada en busca de nuevas solicitudes de conexión y mensajes, respondiendo 
            de manera inteligente a cada interacción.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
              <BellRing className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Monitoreo Activo</h3>
            
            <p className="text-gray-300 mb-5">
              Monitoreo continuo de tópicos HCS designados para detectar nuevas solicitudes 
              y mensajes entrantes en tiempo real.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Verificación de autenticidad</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Procesamiento asincrónico</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Alertas de nuevos mensajes</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all">
              <UserCheck className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Gestión de Conexiones</h3>
            
            <p className="text-gray-300 mb-5">
              Procesamiento automático de solicitudes de conexión entrantes y mantenimiento 
              de conexiones existentes con otros agentes HCS-10.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Verificación de identidad</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Confirmación automática</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Registro de conexiones activas</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-blue-500/30 transition-all">
              <Zap className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Procesamiento de Mensajes</h3>
            
            <p className="text-gray-300 mb-5">
              Análisis y procesamiento inteligente de mensajes entrantes mediante IA 
              para generar respuestas contextuales y precisas.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Análisis semántico</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Respuestas contextuales</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Memoria de conversaciones</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-500/30 group-hover:to-green-500/30 transition-all">
              <RefreshCcw className="h-7 w-7 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Seguimiento de Mensajes</h3>
            
            <p className="text-gray-300 mb-5">
              Seguimiento y registro de todos los mensajes por tópico y número de secuencia 
              para garantizar la integridad de la comunicación.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Registro inmutable</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Secuenciación de mensajes</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Auditoría de comunicaciones</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Estado del Agente</h4>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-400">Activo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Conexiones activas</div>
                      <div className="text-lg font-medium">12</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Mensajes procesados hoy</div>
                      <div className="text-lg font-medium">143</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Tiempo de respuesta</div>
                      <div className="text-lg font-medium">1.2s</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-4">Capacidades de Gestión Avanzadas</h3>
                <p className="text-gray-300 mb-4">
                  El agente HCS-10 está equipado con capacidades avanzadas de gestión que le permiten 
                  manejar múltiples conexiones y procesar diversos tipos de mensajes de forma simultánea, 
                  todo ello manteniendo un registro inmutable de las comunicaciones en la red Hedera.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-blue-400 font-medium">Gestión multipunto</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-purple-400 font-medium">Enrutamiento inteligente</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-teal-400 font-medium">Priorización automática</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-indigo-400 font-medium">Autenticación segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;