import React, { useState } from 'react';
import { MessageSquare, ChevronRight, ArrowRight, Code, Search, Database } from 'lucide-react';

const QuickStartSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [exampleQuery, setExampleQuery] = useState("Show me SauceSwap pools");
  
  const examples = [
    "Show me SauceSwap pools",
    "What are the details of pool #123?",
    "What information do you have about token 0.0.731861?",
    "What pools are associated with HBAR?"
  ];
  
  const handleExampleClick = (example: string) => {
    setExampleQuery(example);
  };

  return (
    <section id="iniciar" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to Interact with the Agent
          </h2>
          <p className="text-lg text-gray-300">
            Interacting with my HCS-10 agent is simple. You can establish a connection
            using its Account ID, and start sending messages immediately. The agent
            will respond intelligently, providing real-time information
            about SauceSwap, DeFi, and other relevant topics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 1 
                  ? 'bg-blue-900/20 border-blue-500/50 shadow-lg shadow-blue-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-blue-500/30'
              }`}
              onClick={() => setActiveStep(1)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 1 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>1</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Establish a connection with the agent</h3>
                <p className="text-gray-400">
                  Use the agent ID (0.0.XXXXX) to initiate a connection through
                  any client compatible with HCS-10.
                </p>
                {activeStep === 1 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      <span className="text-blue-400">connect</span>(<span className="text-green-400">"0.0.XXXXX"</span>);
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 2 
                  ? 'bg-purple-900/20 border-purple-500/50 shadow-lg shadow-purple-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-purple-500/30'
              }`}
              onClick={() => setActiveStep(2)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 2 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>2</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Wait for automatic confirmation</h3>
                <p className="text-gray-400">
                  The agent will automatically process your connection request and
                  establish a secure communication channel.
                </p>
                {activeStep === 2 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <span className="font-mono text-sm text-green-400">
                        Connection established with HCS-10 Agent (0.0.XXXXX)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 3 
                  ? 'bg-teal-900/20 border-teal-500/50 shadow-lg shadow-teal-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-teal-500/30'
              }`}
              onClick={() => setActiveStep(3)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 3 ? 'bg-teal-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>3</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Start sending queries</h3>
                <p className="text-gray-400">
                  Send queries about SauceSwap, tokens, or DeFi and receive
                  detailed responses with up-to-date information.
                </p>
                {activeStep === 3 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      <span className="text-teal-400">sendMessage</span>(<span className="text-green-400">"{exampleQuery}"</span>);
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div 
              className={`flex items-start p-6 rounded-xl border transition-all duration-300 ${
                activeStep === 4 
                  ? 'bg-indigo-900/20 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
                  : 'bg-slate-800/30 border-slate-700 hover:border-indigo-500/30'
              }`}
              onClick={() => setActiveStep(4)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                activeStep === 4 ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                <span>4</span>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Receive detailed responses</h3>
                <p className="text-gray-400">
                  The agent will process your query and provide you with
                  detailed responses with real-time data.
                </p>
                {activeStep === 4 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700 max-h-40 overflow-y-auto">
                    <div className="text-sm">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-4 w-4 text-indigo-400 mr-2" />
                        <span className="text-indigo-400 font-medium">Agent Response:</span>
                      </div>
                      <p>
                        Here are the main SauceSwap pools sorted by liquidity:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #456: HBAR/USDC - $3.4M liquidity</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #123: HBAR/SAUCE - $1.2M liquidity</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                          <span>Pool #789: SAUCE/USDC - $850K liquidity</span>
                        </li>
                      </ul>
                      <p className="mt-2">
                        Would you like detailed information about a specific pool?
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right side - Example queries */}
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6">Example Queries</h3>
            
            <div className="space-y-4">
              {examples.map((example, index) => (
                <button
                  key={index}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-300 flex items-start ${
                    exampleQuery === example
                      ? 'bg-blue-900/20 border-blue-500/50'
                      : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-blue-500/30'
                  }`}
                  onClick={() => handleExampleClick(example)}
                >
                  <div className="mr-3 flex-shrink-0">
                    {index === 0 && <Search className="h-5 w-5 text-blue-400" />}
                    {index === 1 && <Database className="h-5 w-5 text-purple-400" />}
                    {index === 2 && <Code className="h-5 w-5 text-teal-400" />}
                    {index === 3 && <MessageSquare className="h-5 w-5 text-indigo-400" />}
                  </div>
                  <div className="flex-1">
                    <p>{example}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-800/30">
              <h4 className="font-medium text-lg mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-blue-400" />
                <span>Integration in your Application</span>
              </h4>
              
              <p className="text-gray-300 text-sm mb-4">
                You can also integrate the HCS-10 agent directly into your application
                using our JavaScript library:
              </p>
              
              <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-800 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-300">
                  <span className="text-blue-400">import</span> {`{ HCS10Agent }`} <span className="text-blue-400">from</span> <span className="text-green-400">'hcs10-client'</span>;{'\n\n'}
                  <span className="text-purple-400">const</span> <span className="text-blue-300">agent</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">HCS10Agent</span>{'();\n\n'}
                  <span className="text-teal-300">{'// Connect to the agent\n'}</span>
                  <span className="text-blue-400">await</span> agent.<span className="text-yellow-300">connect</span>(<span className="text-green-400">"0.0.XXXXX"</span>);{'\n\n'}
                  <span className="text-teal-300">{'// Send query and receive response\n'}</span>
                  <span className="text-blue-400">const</span> <span className="text-blue-300">response</span> = <span className="text-blue-400">await</span> agent.<span className="text-yellow-300">sendMessage</span>(<span className="text-green-400">"Show me SauceSwap pools"</span>);{'\n\n'}
                  <span className="text-blue-300">console</span>.<span className="text-yellow-300">log</span>(response);
                </pre>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="#documentacion" 
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View complete documentation</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;