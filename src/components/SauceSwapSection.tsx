import React, { useState, useEffect } from 'react';
import { BarChart3, Search, Database, RefreshCw, LineChart, Image, Terminal, Globe, Activity, ExternalLink } from 'lucide-react';

const SauceSwapSection = () => {
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0);
  const [animateChart, setAnimateChart] = useState(false);
  
  // Sample pool data based on SauceSwap plugin system report
  const pools = [
    { id: 1, name: 'HBAR/USDC', liquidity: '$3.4M', tokenA: 'HBAR', priceA: '$0.08', tokenB: 'USDC', priceB: '$1.00', reserveA: '42.5M HBAR', reserveB: '3.4M USDC' },
    { id: 2, name: 'HBAR/SAUCE', liquidity: '$1.2M', tokenA: 'HBAR', priceA: '$0.08', tokenB: 'SAUCE', priceB: '$0.0145', reserveA: '8.3M HBAR', reserveB: '69.5M SAUCE' },
    { id: 3, name: 'USDC/HSuite', liquidity: '$850K', tokenA: 'USDC', priceA: '$1.00', tokenB: 'HSuite', priceB: '$0.004', reserveA: '850K USDC', reserveB: '212.5M HSuite' },
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
            SauceSwap Plugin System
          </h2>
          <p className="text-lg text-gray-300">
            A comprehensive plugin system for Hedera Agents that provides real-time access to SauceSwap DEX data, advanced price charts,
            and Hedera storage integration through specialized modular components.
          </p>
        </div>
        
        <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600 mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Plugin Architecture</h3>
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-300 bg-slate-800/70 p-4 rounded-lg">
{`┌─────────────────────────────────────────────────────────────────┐
│                      SauceSwap Plugin System                    │
├───────────────┬─────────────────┬──────────────┬────────────────┤
│ Pool List     │ Pool Details    │ Token Details│ Associated     │
│ Plugin        │ Plugin          │ Plugin       │ Pools Plugin   │
├───────────────┴─────────────────┴──────────────┴────────────────┤
│                                                                 │
│                     Candlestick Chart Plugin                    │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │ Chart       │  │ Data        │  │ Hedera Integration      │  │
│  │ Generation  │  │ Retrieval   │  │ ┌─────────────────────┐ │  │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │ │ HCS-3 Inscription   │ │  │
│  │ │ Canvas  │ │  │ │ API     │ │  │ │ Image Upload        │ │  │
│  │ │ Renderer│ │  │ │ Client  │ │  │ │ HRL Generation      │ │  │
│  │ └─────────┘ │  │ └─────────┘ │  │ └─────────────────────┘ │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Pool Data Access</h3>
                <p className="text-gray-400">
                  Query all SauceSwap pools with detailed information using specialized plugins like get_sauceswap_pools and get_sauceswap_pool_details, 
                  with support for paginatination and comprehensive metrics.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <Terminal className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Token Analysis</h3>
                <p className="text-gray-400">
                  Access detailed token information and find associated pools with get_sauceswap_token_details and get_sauceswap_associated_pools tools, 
                  providing comprehensive token metrics and relationships.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-teal-500/20 p-3 rounded-lg text-teal-400">
                <Image className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Advanced Candlestick Charts</h3>
                <p className="text-gray-400">
                  Generate professional candlestick charts with customizable time ranges (1h to 1w+), automatic interval selection, 
                  price inversion options, and high-quality visualization through the powerful CandlestickPlugin.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Permanent Hedera Storage</h3>
                <p className="text-gray-400">
                  Charts and data can be permanently stored on Hedera using HCS-3 inscriptions, generating Hedera Resource Locator (HRL) links
                  that can be shared in conversations for permanent access.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-amber-500/20 p-3 rounded-lg text-amber-400">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">HCS-10 Integration</h3>
                <p className="text-gray-400">
                  Utilizes Hedera Consensus Service (HCS-10) for advanced inter-agent communication, encrypted message exchange,
                  and agent profile management with robust state handling.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-rose-500/20 p-3 rounded-lg text-rose-400">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Real-World Applications</h3>
                <p className="text-gray-400">
                  Powers use cases from trading assistants and market reports to DeFi education and automated monitoring systems,
                  combining real-time data with advanced visualization capabilities.
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
            
            {/* Chart visualization - Using Hedera inscription CDN */}
            <div className="w-full mt-4 bg-slate-800/30 rounded-lg p-2">
              <div className="text-xs text-gray-400 mb-2">SauceSwap Candlestick Chart</div>
              <img 
                src="https://kiloscribe.com/api/inscription-cdn/0.0.5934653?network=testnet" 
                alt="Pool 1 - 1w Price Chart" 
                className="w-full h-auto rounded"
              />
            </div>
            
            <div className="mt-6 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 text-xs text-gray-300">
              <div className="flex justify-between mb-1">
                <span>Time Range: 1w</span>
                <span>Pool #1 (HBAR/USDC)</span>
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href="https://hashscan.io/testnet/topic/0.0.5932187" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <span>HRL: hcs://1/0.0.5932187</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className="text-teal-400">↑ Stored on Hedera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SauceSwapSection;