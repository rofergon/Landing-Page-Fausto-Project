import React from 'react';
import { Server, Database, Terminal, CheckCircle } from 'lucide-react';

const ControlPanel = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Especificaciones Técnicas
          </h2>
          <p className="text-lg text-gray-300">
            Panel de control técnico con información detallada sobre la configuración 
            y capacidades del agente HCS-10.
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-gray-400" />
            <span className="font-medium">Panel de Control | Agente HCS-10</span>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="font-medium">Configuración de Red</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Network</span>
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-400 text-sm font-medium">Testnet</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Account ID</span>
                  <span className="font-mono text-sm">0.0.XXXXX</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Inbound Topic</span>
                  <span className="font-mono text-sm">0.0.YYYYY</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Outbound Topic</span>
                  <span className="font-mono text-sm">0.0.ZZZZZ</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Estado</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-sm">Activo</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-purple-400 mr-2" />
                <h3 className="font-medium">Capacidades e Integraciones</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">TEXT_GENERATION</div>
                    <div className="text-xs text-gray-400">Respuestas IA contextuales</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">INFORMATION_RETRIEVAL</div>
                    <div className="text-xs text-gray-400">Consulta de datos SauceSwap</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">API_INTEGRATION</div>
                    <div className="text-xs text-gray-400">Conexión con servicios externos</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">HCS_COMMUNICATION</div>
                    <div className="text-xs text-gray-400">Mensajería segura vía HCS</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-teal-400 mr-2" />
                <h3 className="font-medium">Integraciones</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">SauceSwap API</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Conectado</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weather API</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Conectado</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">LangChain</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Activo</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">ChatGPT-4</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Integrado</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Memoria Contextual</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Habilitada</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Terminal className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="font-medium">Rendimiento</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Uso de CPU</span>
                    <span className="text-xs text-gray-400">32%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Memoria</span>
                    <span className="text-xs text-gray-400">256MB / 512MB</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Almacenamiento</span>
                    <span className="text-xs text-gray-400">1.2GB / 5GB</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Balance HBAR</span>
                    <span className="text-xs text-gray-400">250 ℏ</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-indigo-400 mr-2" />
                <h3 className="font-medium">Registro Actividad</h3>
              </div>
              
              <div className="space-y-3 font-mono text-xs h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:42:31]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Solicitud de conexión recibida de 0.0.AAAAA</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:42:33]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Conexión establecida con 0.0.AAAAA</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:12]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Mensaje recibido: "Precio actual de HBAR"</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:14]</span>
                  <span className="text-purple-400 mr-2">API</span>
                  <span>Consultando SauceSwap API</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:15]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Respuesta enviada con precio HBAR</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:44:22]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Actualizando datos de pools</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:45:01]</span>
                  <span className="text-yellow-400 mr-2">WARN</span>
                  <span>Latencia elevada en respuesta API</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:45:08]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Datos actualizados correctamente</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="font-medium">HBAR & Tokens</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">HBAR</span>
                    <span className="text-green-400">250 ℏ</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Suficiente para ~5000 operaciones
                  </div>
                </div>
                
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SAUCE</span>
                    <span className="text-purple-400">2500 SAUCE</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Token de utilidad SauceSwap
                  </div>
                </div>
                
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">NFTs</span>
                    <span className="text-blue-400">2</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Credenciales de acceso avanzado
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

export default ControlPanel;