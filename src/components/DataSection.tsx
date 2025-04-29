import React, { useEffect, useState } from 'react';
import { BarChart, Cloud, DollarSign, Clock, Search } from 'lucide-react';

const DataSection = () => {
  const [hbarPrice, setHbarPrice] = useState("$0.0712");
  const [priceChange, setPriceChange] = useState("+2.4%");
  const [isPositiveChange, setIsPositiveChange] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Simulate price changes
  useEffect(() => {
    const interval = setInterval(() => {
      const basePrice = 0.0712;
      const randomChange = (Math.random() * 0.005) - 0.0025;
      const newPrice = basePrice + randomChange;
      const formattedPrice = `$${newPrice.toFixed(4)}`;
      
      const percentChange = (randomChange / basePrice) * 100;
      const formattedChange = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(1)}%`;
      
      setHbarPrice(formattedPrice);
      setPriceChange(formattedChange);
      setIsPositiveChange(percentChange > 0);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="datos" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXpNMjAgMzRoNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xek00IDM0aDR2MUg0di0xem0wLTloNHYxSDR2LTF6bTAtOWg0djFINHYtMXptMC05aDR2MUg0di0xem0wLTloNHYxSDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Información Actualizada
          </h2>
          <p className="text-lg text-gray-300">
            Accede a datos en tiempo real del ecosistema Hedera, incluyendo precios de HBAR, 
            información detallada de SauceSwap, y datos meteorológicos cuando los necesites. 
            Mi agente se conecta directamente a APIs especializadas para brindarte la información más reciente.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Search interface */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              
              <input 
                type="text" 
                className="block w-full pl-12 pr-4 py-3 bg-slate-800/70 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="¿Qué información necesitas? Ej: precio de HBAR, pools de SauceSwap..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mt-3 text-sm text-gray-400 flex items-center justify-center">
              <span className="mr-2">Ejemplos de consultas:</span>
              <button 
                className="px-3 py-1 bg-slate-800 rounded-full text-blue-400 mr-2 hover:bg-slate-700 transition-colors"
                onClick={() => setSearchQuery("¿Cuál es el precio actual de HBAR?")}
              >
                Precio HBAR
              </button>
              <button 
                className="px-3 py-1 bg-slate-800 rounded-full text-purple-400 mr-2 hover:bg-slate-700 transition-colors"
                onClick={() => setSearchQuery("Muéstrame los pools de SauceSwap")}
              >
                Pools SauceSwap
              </button>
              <button 
                className="px-3 py-1 bg-slate-800 rounded-full text-teal-400 hover:bg-slate-700 transition-colors"
                onClick={() => setSearchQuery("Información del token SAUCE")}
              >
                Info token
              </button>
            </div>
          </div>
          
          {/* Data cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm flex items-center">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>Precios Actualizados</span>
                  </p>
                  <h3 className="text-xl font-semibold mt-1">Tokens en SauceSwap</h3>
                </div>
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">HBAR</div>
                    <div className="text-sm text-gray-400">Hedera</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{hbarPrice}</div>
                    <div className={`text-sm ${isPositiveChange ? 'text-green-400' : 'text-red-400'}`}>
                      {priceChange}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">SAUCE</div>
                    <div className="text-sm text-gray-400">SauceSwap</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$0.0158</div>
                    <div className="text-sm text-green-400">+1.2%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">USDC</div>
                    <div className="text-sm text-gray-400">USD Coin</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$1.000</div>
                    <div className="text-sm text-gray-400">+0.0%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm flex items-center">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>Liquidez SauceSwap</span>
                  </p>
                  <h3 className="text-xl font-semibold mt-1">Top Pools</h3>
                </div>
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <BarChart className="h-6 w-6 text-purple-400" />
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">HBAR/USDC</div>
                    <div className="text-sm text-gray-400">Pool #456</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$3.4M</div>
                    <div className="text-sm text-gray-400">28.5M HBAR</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">HBAR/SAUCE</div>
                    <div className="text-sm text-gray-400">Pool #123</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$1.2M</div>
                    <div className="text-sm text-gray-400">8.5M SAUCE</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">SAUCE/USDC</div>
                    <div className="text-sm text-gray-400">Pool #789</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$850K</div>
                    <div className="text-sm text-gray-400">56.6M SAUCE</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm flex items-center">
                    <Cloud className="h-4 w-4 mr-1" />
                    <span>Información Meteorológica</span>
                  </p>
                  <h3 className="text-xl font-semibold mt-1">Clima en Ciudades</h3>
                </div>
                <div className="bg-teal-500/20 p-2 rounded-lg">
                  <Cloud className="h-6 w-6 text-teal-400" />
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">Nueva York</div>
                    <div className="text-sm text-gray-400">Estados Unidos</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">23°C</div>
                    <div className="text-sm text-gray-400">Parcialmente nublado</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">Londres</div>
                    <div className="text-sm text-gray-400">Reino Unido</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">18°C</div>
                    <div className="text-sm text-gray-400">Lluvia ligera</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium">Tokio</div>
                    <div className="text-sm text-gray-400">Japón</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">27°C</div>
                    <div className="text-sm text-gray-400">Soleado</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Actividad Reciente</span>
                  </p>
                  <h3 className="text-xl font-semibold mt-1">Últimas Consultas</h3>
                </div>
                <div className="bg-indigo-500/20 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-indigo-400" />
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Precio de HBAR</div>
                    <div className="text-xs text-gray-400">Hace 5 min</div>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    Consulta sobre el precio actual y tendencia de HBAR
                  </div>
                </div>
                
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pools SauceSwap</div>
                    <div className="text-xs text-gray-400">Hace 18 min</div>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    Listado de pools con mayor liquidez en SauceSwap
                  </div>
                </div>
                
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Token SAUCE</div>
                    <div className="text-xs text-gray-400">Hace 42 min</div>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    Información detallada sobre el token SAUCE
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

export default DataSection;