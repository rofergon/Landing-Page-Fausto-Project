import React, { useState, useEffect } from 'react';
import { BarChart3, Search, Database, RefreshCw } from 'lucide-react';

const SauceSwapSection = () => {
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0);
  const [animateChart, setAnimateChart] = useState(false);
  
  // Sample pool data
  const pools = [
    { id: 123, name: 'HBAR/SAUCE', liquidity: '$1.2M', tokenA: 'HBAR', priceA: '$0.07', tokenB: 'SAUCE', priceB: '$0.015', reserveA: '450K HBAR', reserveB: '8.5M SAUCE' },
    { id: 456, name: 'HBAR/USDC', liquidity: '$3.4M', tokenA: 'HBAR', priceA: '$0.07', tokenB: 'USDC', priceB: '$1.00', reserveA: '28.5M HBAR', reserveB: '2M USDC' },
    { id: 789, name: 'SAUCE/USDC', liquidity: '$850K', tokenA: 'SAUCE', priceA: '$0.015', tokenB: 'USDC', priceB: '$1.00', reserveA: '56.6M SAUCE', reserveB: '850K USDC' },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoolIndex((prev) => (prev + 1) % pools.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [pools.length]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateChart(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="sauceswap" className="py-20 relative bg-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXpNMjAgMzRoNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xek00IDM0aDR2MUg0di0xem0wLTloNHYxSDR2LTF6bTAtOWg0djFINHYtMXptMC05aDR2MUg0di0xem0wLTloNHYxSDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete SauceSwap Information
          </h2>
          <p className="text-lg text-gray-300">
            Access detailed data from the SauceSwap DEX directly through your agent.
            Check liquidity pools, token details, updated prices, and all the
            information needed to make informed decisions in the Hedera DeFi ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Pool Exploration</h3>
                <p className="text-gray-400">
                  Paginated exploration of SauceSwap pools with complete details on liquidity, tokens, and reserves.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Token Information</h3>
                <p className="text-gray-400">
                  Complete details about any token including current price, description, and social links.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-teal-500/20 p-3 rounded-lg text-teal-400">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Advanced Search</h3>
                <p className="text-gray-400">
                  Find pools associated with a specific token or search by liquidity and volume ranges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
                <RefreshCw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Real-Time Data</h3>
                <p className="text-gray-400">
                  Constantly updated information with compatibility for Hedera mainnet and testnet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Pool data visualization */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-xl">Pool #{pools[currentPoolIndex].id}: {pools[currentPoolIndex].name}</h3>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                Liquidity: {pools[currentPoolIndex].liquidity}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/80 p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Token A</div>
                <div className="font-medium text-lg">{pools[currentPoolIndex].tokenA}</div>
                <div className="text-teal-400">{pools[currentPoolIndex].priceA}</div>
                <div className="text-sm text-gray-400 mt-2">Reserves</div>
                <div className="font-medium">{pools[currentPoolIndex].reserveA}</div>
              </div>
              
              <div className="bg-slate-800/80 p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Token B</div>
                <div className="font-medium text-lg">{pools[currentPoolIndex].tokenB}</div>
                <div className="text-purple-400">{pools[currentPoolIndex].priceB}</div>
                <div className="text-sm text-gray-400 mt-2">Reserves</div>
                <div className="font-medium">{pools[currentPoolIndex].reserveB}</div>
              </div>
            </div>
            
            {/* Chart visualization */}
            <div className="h-32 w-full relative mt-4">
              <div className="absolute inset-0 flex items-end">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1/24 mx-px bg-blue-500/70 rounded-t transition-all duration-1000 ${animateChart ? '' : 'h-0'}`}
                    style={{ 
                      height: `${animateChart ? 15 + Math.sin(i / 3) * 60 + Math.random() * 20 : 0}%`,
                      transitionDelay: `${i * 50}ms`
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 opacity-50"></div>
            </div>
            
            <div className="mt-4 flex justify-between text-xs text-gray-400">
              <span>12h</span>
              <span>6h</span>
              <span>Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SauceSwapSection;