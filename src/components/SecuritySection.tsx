import React from 'react';
import { ShieldCheck, Lock, KeyRound, FileDigit, History } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section id="seguridad" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seguridad Garantizada
          </h2>
          <p className="text-lg text-gray-300">
            Toda la comunicación se realiza a través de la infraestructura segura de Hedera, 
            utilizando tópicos HCS dedicados y siguiendo el estándar HCS-10. Las claves privadas 
            nunca abandonan el entorno seguro y toda la información transmitida queda registrada 
            de forma inmutable en el ledger de Hedera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Security features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Tópicos HCS Dedicados</h3>
                <p className="text-gray-400">
                  Cada agente utiliza tópicos HCS dedicados para entrada y salida de mensajes, 
                  garantizando la privacidad y seguridad de las comunicaciones.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Almacenamiento Seguro</h3>
                <p className="text-gray-400">
                  Las claves privadas nunca abandonan el entorno seguro del agente, 
                  protegiendo la identidad y las operaciones del usuario.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Verificación de Identidad</h3>
                <p className="text-gray-400">
                  Autenticación rigurosa a través de cuentas de Hedera para garantizar 
                  la identidad de todos los participantes en la comunicación.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-teal-500/20 p-3 rounded-lg text-teal-400">
                <History className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Registro Inmutable</h3>
                <p className="text-gray-400">
                  Todas las comunicaciones quedan registradas de forma inmutable en el ledger 
                  de Hedera, proporcionando trazabilidad y auditabilidad.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500/20 p-3 rounded-lg text-green-400">
                <FileDigit className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Estándar HCS-10</h3>
                <p className="text-gray-400">
                  Implementación completa del estándar HCS-10 para comunicación segura 
                  entre agentes en el ecosistema Hedera.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Security visualization */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-semibold mb-6 relative z-10">Arquitectura de Seguridad</h3>
            
            <div className="relative p-6 bg-slate-800/70 rounded-lg border border-slate-700 mb-6">
              <div className="absolute -top-4 left-4 px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
                Tu Dispositivo
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-8 w-8 text-blue-400" />
                  </div>
                  <span className="text-sm">Agente HCS-10</span>
                </div>
                
                <div className="text-gray-500">
                  <KeyRound className="h-5 w-5" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-2">
                    <div className="w-10 h-10 bg-slate-600 rounded flex items-center justify-center">
                      <KeyRound className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  <span className="text-sm">Claves Privadas</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              <div className="h-16 w-0.5 bg-slate-600 relative">
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500/30 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="relative p-6 bg-indigo-900/30 rounded-lg border border-indigo-800/50 mb-6">
              <div className="absolute -top-4 left-4 px-3 py-1 bg-indigo-500 rounded-full text-sm font-medium">
                Red Hedera
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-2">
                    <FileDigit className="h-8 w-8 text-indigo-400" />
                  </div>
                  <span className="text-sm">Tópico Entrada</span>
                  <span className="text-xs text-gray-400">0.0.YYYYY</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-2">
                    <FileDigit className="h-8 w-8 text-indigo-400" />
                  </div>
                  <span className="text-sm">Tópico Salida</span>
                  <span className="text-xs text-gray-400">0.0.ZZZZZ</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              <div className="h-16 w-0.5 bg-slate-600 relative">
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500/30 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="relative p-6 bg-purple-900/30 rounded-lg border border-purple-800/50">
              <div className="absolute -top-4 left-4 px-3 py-1 bg-purple-500 rounded-full text-sm font-medium">
                Otros Agentes
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agente B</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agente C</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agente D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;