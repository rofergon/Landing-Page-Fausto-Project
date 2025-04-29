import React from 'react';
import { Server, Database, Terminal, CheckCircle } from 'lucide-react';

const ControlPanel = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-300">
            Technical control panel with detailed information about the configuration 
            and capabilities of the HCS-10 agent.
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-gray-400" />
            <span className="font-medium">Control Panel | HCS-10 Agent</span>
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
                <h3 className="font-medium">Network Configuration</h3>
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
                  <span className="text-gray-400 text-sm">Status</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-purple-400 mr-2" />
                <h3 className="font-medium">Capabilities & Integrations</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">TEXT_GENERATION</div>
                    <div className="text-xs text-gray-400">Contextual AI responses</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">INFORMATION_RETRIEVAL</div>
                    <div className="text-xs text-gray-400">SauceSwap data queries</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">API_INTEGRATION</div>
                    <div className="text-xs text-gray-400">Connection with external services</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">HCS_COMMUNICATION</div>
                    <div className="text-xs text-gray-400">Secure messaging via HCS</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 text-teal-400 mr-2" />
                <h3 className="font-medium">Integrations</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">SauceSwap API</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Connected</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weather API</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Connected</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">LangChain</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Active</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">ChatGPT-4</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Integrated</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Contextual Memory</span>
                  <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-400 text-xs">Enabled</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 p-5 rounded">
              <div className="flex items-center mb-4">
                <Terminal className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="font-medium">Performance</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">CPU Usage</span>
                    <span className="text-xs text-gray-400">32%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Memory</span>
                    <span className="text-xs text-gray-400">256MB / 512MB</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Storage</span>
                    <span className="text-xs text-gray-400">1.2GB / 5GB</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">HBAR Balance</span>
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
                <h3 className="font-medium">Activity Log</h3>
              </div>
              
              <div className="space-y-3 font-mono text-xs h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:42:31]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Connection request received from 0.0.AAAAA</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:42:33]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Connection established with 0.0.AAAAA</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:12]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Message received: "Current HBAR price"</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:14]</span>
                  <span className="text-purple-400 mr-2">API</span>
                  <span>Querying SauceSwap API</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:43:15]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Response sent with HBAR price</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:44:22]</span>
                  <span className="text-blue-400 mr-2">INFO</span>
                  <span>Updating pool data</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:45:01]</span>
                  <span className="text-yellow-400 mr-2">WARN</span>
                  <span>High latency in API response</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-2">[15:45:08]</span>
                  <span className="text-green-400 mr-2">SUCCESS</span>
                  <span>Data updated successfully</span>
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
                    Sufficient for ~5000 operations
                  </div>
                </div>
                
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SAUCE</span>
                    <span className="text-purple-400">2500 SAUCE</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    SauceSwap utility token
                  </div>
                </div>
                
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">NFTs</span>
                    <span className="text-blue-400">2</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Advanced access credentials
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