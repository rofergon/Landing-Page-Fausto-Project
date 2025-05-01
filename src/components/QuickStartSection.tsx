import React, { useState } from 'react';
import { MessageSquare, ChevronRight, ArrowRight, Code, Search, Database, ImageIcon, LineChart } from 'lucide-react';

const QuickStartSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [exampleQuery, setExampleQuery] = useState("Show me SauceSwap pools");
  
  const examples = [
    "Show me SauceSwap pools",
    "Get details of pool #123",
    "Generate a candlestick chart for HBAR/USDC pool (1 week)",
    "What does impermanent loss mean for HBAR/SAUCE pool?"
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
            How to Run the Project
          </h2>
          <p className="text-lg text-gray-300">
            The Fausto Agent uses LangChain and HCS-10 to provide a powerful
            interface for interacting with SauceSwap data. Follow these simple
            steps to get started with your own agent instance.
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
                <h3 className="font-medium text-xl mb-2">Clone the Repository</h3>
                <p className="text-gray-400">
                  Get the project code from GitHub to start building your Fausto agent.
                </p>
                {activeStep === 1 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      git clone https://github.com/rofergon/Fausto_Project-Hedera_HCS-10.git
                      <br/>
                      cd standards-agent-kit
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
                <h3 className="font-medium text-xl mb-2">Install Dependencies</h3>
                <p className="text-gray-400">
                  Install the required dependencies for the project, including LangChain, Hedera SDK, and chart generation tools.
                </p>
                {activeStep === 2 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      npm install --legacy-peer-deps
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
                <h3 className="font-medium text-xl mb-2">Configure Environment</h3>
                <p className="text-gray-400">
                  Set up your environment variables with Hedera credentials and API keys.
                </p>
                {activeStep === 3 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      cp .env.sample .env
                      <br/>
                      <br/>
                      <span className="text-gray-400"># Edit .env with your keys:</span>
                      <br/>
                      HEDERA_OPERATOR_ID=0.0.xxxxxx
                      <br/>
                      HEDERA_OPERATOR_KEY=302e020100...
                      <br/>
                      HEDERA_NETWORK=testnet
                      <br/>
                      REGISTRY_URL=https://moonscape.tech
                      <br/>
                      OPENAI_API_KEY=sk-xxxxxxxxxx
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
                <h3 className="font-medium text-xl mb-2">Run the Fausto Agent</h3>
                <p className="text-gray-400">
                  Start the agent and choose your operation mode: console or automated.
                </p>
                {activeStep === 4 && (
                  <div className="mt-4 bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <div className="font-mono text-sm">
                      npm run fausto-agent
                      <br/>
                      <br/>
                      <span className="text-gray-400">? Select mode:</span>
                      <br/>
                      <span className="text-white">❯ Automated Mode</span> - Monitor HCS connections
                      <br/>
                      <span className="text-gray-400">  Console Mode</span> - Direct interaction
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right side - Example queries */}
          <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6">SauceSwap Plugin Features</h3>
            
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
                    {index === 2 && <ImageIcon className="h-5 w-5 text-teal-400" />}
                    {index === 3 && <LineChart className="h-5 w-5 text-indigo-400" />}
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
                <span>LangChain Integration</span>
              </h4>
              
              <p className="text-gray-300 text-sm mb-4">
                The agent uses LangChain to process natural language and interact with SauceSwap data:
              </p>
              
              <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-800 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-300">
                  <span className="text-teal-300">// Initialize LangChain components</span>{'\n'}
                  <span className="text-blue-400">const</span> <span className="text-blue-300">llm</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">ChatOpenAI</span>({`{ openAIApiKey, modelName: 'o4-mini' }`});\n
                  <span className="text-blue-400">const</span> <span className="text-blue-300">memory</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">ConversationTokenBufferMemory</span>({'\n  '}
                  <span className="text-blue-300">llm, memoryKey: 'chat_history', maxTokenLimit: 4000</span>{'\n'});{'\n\n'}
                  <span className="text-teal-300">// Register SauceSwap plugins</span>{'\n'}
                  <span className="text-blue-400">const</span> <span className="text-blue-300">pluginRegistry</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">PluginRegistry</span>({'\n  '}
                  <span className="text-blue-300">pluginContext</span>{'\n'});{'\n'}
                  <span className="text-blue-400">const</span> <span className="text-blue-300">sauceSwapPlugin</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">SauceSwapPlugin</span>();{'\n'}
                  <span className="text-blue-400">await</span> pluginRegistry.<span className="text-yellow-300">registerPlugin</span>(sauceSwapPlugin);{'\n\n'}
                  <span className="text-teal-300">// Initialize Agent Executor</span>{'\n'}
                  <span className="text-blue-400">const</span> <span className="text-blue-300">agentExecutor</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">AgentExecutor</span>({`{`}{'\n  '}
                  <span className="text-blue-300">agent, tools, memory, maxIterations: 4</span>{'\n'});
                </pre>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="#documentacion" 
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View full implementation details</span>
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