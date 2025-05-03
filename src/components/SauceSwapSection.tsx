import { useState, useEffect, useRef } from 'react';
import { BarChart3, Search, Database, Image, Terminal, Globe, Activity, ExternalLink, Package, Layers, Code, Server, Link2, ChevronDown, ChevronUp, Info, Zap, List, FileText } from 'lucide-react';

const SauceSwapSection = () => {
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  
  // Estado para los desplegables
  const [expandedPlugin, setExpandedPlugin] = useState<string | null>(null);
  
  // Función para alternar la expansión de un plugin
  const togglePlugin = (pluginId: string) => {
    if (expandedPlugin === pluginId) {
      setExpandedPlugin(null);
    } else {
      setExpandedPlugin(pluginId);
    }
  };
  
  // Sample pool data based on SauceSwap plugin system report
  const pools = [
    { id: 1, name: 'HBAR/USDC', liquidity: '$3.4M', tokenA: 'HBAR', priceA: '$0.08', tokenB: 'USDC', priceB: '$1.00', reserveA: '42.5M HBAR', reserveB: '3.4M USDC' },
    { id: 2, name: 'HBAR/SAUCE', liquidity: '$1.2M', tokenA: 'HBAR', priceA: '$0.08', tokenB: 'SAUCE', priceB: '$0.0145', reserveA: '8.3M HBAR', reserveB: '69.5M SAUCE' },
    { id: 3, name: 'USDC/HSuite', liquidity: '$850K', tokenA: 'USDC', priceA: '$1.00', tokenB: 'HSuite', priceB: '$0.004', reserveA: '850K USDC', reserveB: '212.5M HSuite' },
  ];
  
  // Datos de implementación para cada plugin
  const pluginDetails = {
    poolList: {
      title: "Pool List Plugin",
      icon: <List className="h-4 w-4 mr-1" />,
      color: "purple",
      description: "Query all available pools with pagination support",
      implementation: [
        "Retrieves pool data from SauceSwap DEX on Hedera",
        "Organizes information in tabular format with pagination (10 pools per page)",
        "Includes data such as ID, token pairs, prices, and liquidity",
        "Supports filtering by parameters like minimum volume or specific token"
      ],
      code: `
// Example plugin usage
const pools = await getSauceSwapPoolsTool._call({ 
  network: 'mainnet', 
  page: 1 
});`,
      output: `
SauceSwap Pools (mainnet) - Page 1/5 (Total: 42)

ID | Pair | Token Prices | LP Price
---|------|-------------|--------
1 | HBAR-USDC | HBAR: $0.08, USDC: $1.00 | $24.37
2 | HBAR-SAUCE | HBAR: $0.08, SAUCE: $0.0145 | $0.89
3 | USDC-HSuite | USDC: $1.00, HSuite: $0.004 | $0.12
...`
    },
    poolDetails: {
      title: "Pool Details Plugin",
      icon: <Search className="h-4 w-4 mr-1" />,
      color: "blue",
      description: "Provides detailed information about a specific pool by ID",
      implementation: [
        "Retrieves complete data for a specific pool using its ID",
        "Includes information about reserves, liquidity, tokens, and prices",
        "Provides detailed metrics such as APR, volume, and pool fee",
        "Allows access to recent transaction history of the pool"
      ],
      code: `
// Example plugin usage
const poolDetails = await getSauceSwapPoolDetailsTool._call({
  network: 'mainnet',
  poolId: 5
});`,
      output: `
{
  "id": 5,
  "contractId": "0.0.1234567",
  "pair": "HBAR-USDC",
  "lpToken": {
    "symbol": "HBAR-USDC-LP",
    "priceUsd": 24.37,
    "totalReserve": "12345678"
  },
  "tokens": {
    "HBAR": {
      "id": "0.0.1234",
      "priceUsd": 0.08,
      "reserve": "123456789"
    },
    "USDC": {
      "id": "0.0.456789",
      "priceUsd": 1.0,
      "reserve": "9876543"
    }
  }
}`
    },
    tokenDetails: {
      title: "Token Details Plugin",
      icon: <FileText className="h-4 w-4 mr-1" />,
      color: "teal",
      description: "Query comprehensive information about a specific token",
      implementation: [
        "Retrieves detailed token data from the Hedera network",
        "Provides information such as price, supply, and market cap",
        "Includes metadata like website, description, and social links",
        "Offers price history and token volume metrics"
      ],
      code: `
// Example plugin usage
const tokenDetails = await getSauceSwapTokenDetailsTool._call({
  network: 'mainnet',
  tokenId: 'tokenIdOfSAUCE'
});`,
      output: `
{
  "id": "0.0.123456",
  "symbol": "SAUCE",
  "name": "SauceSwap Token",
  "decimals": 8,
  "priceUsd": 0.0145,
  "totalSupply": "1000000000",
  "website": "https://sauceswap.io",
  "description": "Governance token for the SauceSwap DEX",
  "socialLinks": {
    "twitter": "https://twitter.com/sauceswap",
    "telegram": "https://t.me/sauceswap"
  }
}`
    },
    associatedPools: {
      title: "Associated Pools Plugin",
      icon: <Zap className="h-4 w-4 mr-1" />,
      color: "indigo",
      description: "Find all pools containing a specific token",
      implementation: [
        "Searches for all pools where a specific token is present",
        "Sorts results by liquidity, volume, or creation date",
        "Provides data on token participation in each pool",
        "Allows comparison of metrics between different pools of the same token"
      ],
      code: `
// Example plugin usage
const tokenPools = await getSauceSwapAssociatedPoolsTool._call({
  network: 'mainnet',
  tokenId: 'tokenIdOfSAUCE'
});`,
      output: `
Associated Pools for SAUCE (0.0.123456) - Total: 5

Pool ID | Pair | Liquidity | Token % | Volume 24h
--------|------|-----------|---------|----------
2 | HBAR-SAUCE | $1.2M | 65% | $243K
7 | USDC-SAUCE | $850K | 85% | $156K
12 | SAUCE-HSUITE | $340K | 42% | $89K
18 | SAUCE-HBARS | $125K | 38% | $34K
24 | ETH-SAUCE | $78K | 15% | $12K`
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoolIndex((prev) => (prev + 1) % pools.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [pools.length]);

  return (
    <section id="sauceswap" className="py-20 relative bg-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXptMC05aDR2MWgtNHYtMXpNMjAgMzRoNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xem0wLTloNHYxaC00di0xek00IDM0aDR2MUg0di0xem0wLTloNHYxSDR2LTF6bTAtOWg0djFINHYtMXptMC05aDR2MUg0di0xem0wLTloNHYxSDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-slate-700/50 rounded-full px-4 py-2 mb-4">
            <a 
              href="https://hashscan.io/testnet/account/0.0.5932173?pc=1&ps=1&pt=1&pf=1&pa=1&pr=1&ph=1&pn=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center"
            >
              Active Agent | Network: Testnet | ID: 0.0.5932173
              <Activity className="ml-2 h-4 w-4 opacity-60" />
            </a>
          </div>
          <p className="text-xs text-gray-400/70 italic">
            Click to view agent details on HashScan ↗
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SauceSwap Plugin System
          </h2>
          <p className="text-lg text-gray-300">
            A comprehensive plugin system for Hedera Agents that provides real-time access to SauceSwap DEX data, advanced price charts,
            and Hedera storage integration through specialized modular components.
          </p>
        </div>
        
        {/* Visual Plugin Architecture - Increased width */}
        <div className="bg-slate-700/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-600 mb-16 max-w-[1400px] mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Plugin Architecture</h3>
          
          {/* Expanded container */}
          <div className="relative w-full mx-auto">
            {/* Main Plugin Container */}
            <div className="border border-blue-500/50 rounded-lg p-4 md:p-6 bg-slate-800/70 mb-3">
              <div className="flex items-center justify-center gap-2 mb-6 text-blue-400">
                <Package className="h-5 w-5" />
                <span className="font-medium text-lg">SauceSwap Plugin System</span>
              </div>
              
              {/* Plugin Row - Increased gap and spacing - Ahora con posicionamiento relativo */}
              <div ref={gridContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 relative">
                {/* Pool List Plugin */}
                <div className={`bg-slate-700/80 border border-purple-500/30 rounded-lg overflow-hidden ${expandedPlugin === 'poolList' ? 'z-10' : ''}`}>
                  <button 
                    onClick={() => togglePlugin('poolList')}
                    className="w-full p-3 md:p-4 flex items-center justify-between text-left hover:bg-slate-600/30 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-500/20 p-1.5 rounded-md text-purple-400 mr-2">
                        <Layers className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-gray-200">Pool List Plugin</span>
                    </div>
                    <div className="flex items-center">
                      <div className="animate-pulse bg-purple-500/30 rounded-full h-2 w-2 mr-2"></div>
                      {expandedPlugin === 'poolList' ? (
                        <ChevronUp className="h-4 w-4 text-purple-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-purple-400" />
                      )}
                    </div>
                  </button>
                </div>
                
                {/* Pool Details Plugin */}
                <div className={`bg-slate-700/80 border border-blue-500/30 rounded-lg overflow-hidden ${expandedPlugin === 'poolDetails' ? 'z-10' : ''}`}>
                  <button 
                    onClick={() => togglePlugin('poolDetails')}
                    className="w-full p-3 md:p-4 flex items-center justify-between text-left hover:bg-slate-600/30 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500/20 p-1.5 rounded-md text-blue-400 mr-2">
                        <Search className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-gray-200">Pool Details Plugin</span>
                    </div>
                    <div className="flex items-center">
                      <div className="animate-pulse bg-blue-500/30 rounded-full h-2 w-2 mr-2"></div>
                      {expandedPlugin === 'poolDetails' ? (
                        <ChevronUp className="h-4 w-4 text-blue-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-blue-400" />
                      )}
                    </div>
                  </button>
                </div>
                
                {/* Token Details Plugin */}
                <div className={`bg-slate-700/80 border border-teal-500/30 rounded-lg overflow-hidden ${expandedPlugin === 'tokenDetails' ? 'z-10' : ''}`}>
                  <button 
                    onClick={() => togglePlugin('tokenDetails')}
                    className="w-full p-3 md:p-4 flex items-center justify-between text-left hover:bg-slate-600/30 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-teal-500/20 p-1.5 rounded-md text-teal-400 mr-2">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-gray-200">Token Details Plugin</span>
                    </div>
                    <div className="flex items-center">
                      <div className="animate-pulse bg-teal-500/30 rounded-full h-2 w-2 mr-2"></div>
                      {expandedPlugin === 'tokenDetails' ? (
                        <ChevronUp className="h-4 w-4 text-teal-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-teal-400" />
                      )}
                    </div>
                  </button>
                </div>
                
                {/* Associated Pools Plugin */}
                <div className={`bg-slate-700/80 border border-indigo-500/30 rounded-lg overflow-hidden ${expandedPlugin === 'associatedPools' ? 'z-10' : ''}`}>
                  <button 
                    onClick={() => togglePlugin('associatedPools')}
                    className="w-full p-3 md:p-4 flex items-center justify-between text-left hover:bg-slate-600/30 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500/20 p-1.5 rounded-md text-indigo-400 mr-2">
                        <Zap className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-gray-200">Associated Pools Plugin</span>
                    </div>
                    <div className="flex items-center">
                      <div className="animate-pulse bg-indigo-500/30 rounded-full h-2 w-2 mr-2"></div>
                      {expandedPlugin === 'associatedPools' ? (
                        <ChevronUp className="h-4 w-4 text-indigo-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-indigo-400" />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Contenido desplegable - Ahora fuera del grid para mejor posicionamiento */}
              {expandedPlugin === 'poolList' && (
                <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 md:p-5 mb-8 shadow-lg">
                  <p className="text-gray-300 mb-3 flex items-start">
                    <Info className="h-4 w-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    {pluginDetails.poolList.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Implementation:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1.5">
                      {pluginDetails.poolList.implementation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Code Example:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto">
                      {pluginDetails.poolList.code}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Output:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                      {pluginDetails.poolList.output}
                    </pre>
                  </div>
                </div>
              )}
              
              {expandedPlugin === 'poolDetails' && (
                <div className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 md:p-5 mb-8 shadow-lg">
                  <p className="text-gray-300 mb-3 flex items-start">
                    <Info className="h-4 w-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    {pluginDetails.poolDetails.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Implementation:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1.5">
                      {pluginDetails.poolDetails.implementation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Code Example:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto">
                      {pluginDetails.poolDetails.code}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Output:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                      {pluginDetails.poolDetails.output}
                    </pre>
                  </div>
                </div>
              )}
              
              {expandedPlugin === 'tokenDetails' && (
                <div className="bg-slate-800/90 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 md:p-5 mb-8 shadow-lg">
                  <p className="text-gray-300 mb-3 flex items-start">
                    <Info className="h-4 w-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                    {pluginDetails.tokenDetails.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-teal-400 mb-2">Implementation:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1.5">
                      {pluginDetails.tokenDetails.implementation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-teal-400 mb-2">Code Example:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto">
                      {pluginDetails.tokenDetails.code}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-teal-400 mb-2">Output:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                      {pluginDetails.tokenDetails.output}
                    </pre>
                  </div>
                </div>
              )}
              
              {expandedPlugin === 'associatedPools' && (
                <div className="bg-slate-800/90 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-4 md:p-5 mb-8 shadow-lg">
                  <p className="text-gray-300 mb-3 flex items-start">
                    <Info className="h-4 w-4 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    {pluginDetails.associatedPools.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-indigo-400 mb-2">Implementation:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1.5">
                      {pluginDetails.associatedPools.implementation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-indigo-400 mb-2">Code Example:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto">
                      {pluginDetails.associatedPools.code}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-indigo-400 mb-2">Output:</h4>
                    <pre className="bg-slate-900/70 p-3 rounded text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                      {pluginDetails.associatedPools.output}
                    </pre>
                  </div>
                </div>
              )}
              
              {/* Candlestick Chart Plugin - Increased spacing */}
              <div className="border border-green-500/50 rounded-lg p-4 md:p-6 bg-slate-700/50">
                <div className="flex items-center justify-center gap-2 mb-4 text-green-400">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Candlestick Chart Plugin</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Chart Generation */}
                  <div className="bg-slate-800/90 border border-green-500/30 rounded p-3 md:p-4">
                    <div className="flex items-center justify-center text-green-400 mb-3">
                      <Activity className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Chart Generation</span>
                    </div>
                    <div className="bg-slate-700/80 border border-green-500/20 rounded p-2.5 text-center">
                      <div className="flex items-center justify-center text-green-400 mb-1">
                        <Code className="h-3 w-3 mr-1" />
                      </div>
                      <p className="text-xs text-gray-300">Canvas Renderer</p>
                    </div>
                  </div>
                  
                  {/* Data Retrieval */}
                  <div className="bg-slate-800/90 border border-green-500/30 rounded p-3 md:p-4">
                    <div className="flex items-center justify-center text-green-400 mb-3">
                      <Database className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Data Retrieval</span>
                    </div>
                    <div className="bg-slate-700/80 border border-green-500/20 rounded p-2.5 text-center">
                      <div className="flex items-center justify-center text-green-400 mb-1">
                        <Server className="h-3 w-3 mr-1" />
                      </div>
                      <p className="text-xs text-gray-300">API Client</p>
                    </div>
                  </div>
                  
                  {/* Hedera Integration */}
                  <div className="bg-slate-800/90 border border-green-500/30 rounded p-3 md:p-4">
                    <div className="flex items-center justify-center text-green-400 mb-3">
                      <Globe className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Hedera Integration</span>
                    </div>
                    <div className="bg-slate-700/80 border border-green-500/20 rounded p-2 mb-2">
                      <p className="text-xs text-gray-300 text-center">HCS-3 Inscription</p>
                    </div>
                    <div className="bg-slate-700/80 border border-green-500/20 rounded p-2 mb-2">
                      <p className="text-xs text-gray-300 text-center">Image Upload</p>
                    </div>
                    <div className="bg-slate-700/80 border border-green-500/20 rounded p-2">
                      <div className="flex items-center justify-center text-green-400">
                        <Link2 className="h-3 w-3 mr-1" />
                        <p className="text-xs text-gray-300">HRL Generation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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