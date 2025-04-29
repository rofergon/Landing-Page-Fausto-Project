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
            Guaranteed Security
          </h2>
          <p className="text-lg text-gray-300">
            All communication takes place through Hedera's secure infrastructure,
            using dedicated HCS topics and following the HCS-10 standard. Private keys
            never leave the secure environment and all transmitted information is recorded
            immutably on the Hedera ledger.
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
                <h3 className="font-medium text-xl mb-2">Dedicated HCS Topics</h3>
                <p className="text-gray-400">
                  Each agent uses dedicated HCS topics for incoming and outgoing messages,
                  ensuring the privacy and security of communications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Secure Storage</h3>
                <p className="text-gray-400">
                  Private keys never leave the agent's secure environment,
                  protecting the user's identity and operations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Identity Verification</h3>
                <p className="text-gray-400">
                  Rigorous authentication through Hedera accounts to ensure
                  the identity of all participants in the communication.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-teal-500/20 p-3 rounded-lg text-teal-400">
                <History className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Immutable Record</h3>
                <p className="text-gray-400">
                  All communications are immutably recorded on the Hedera ledger,
                  providing traceability and auditability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500/20 p-3 rounded-lg text-green-400">
                <FileDigit className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">HCS-10 Standard</h3>
                <p className="text-gray-400">
                  Complete implementation of the HCS-10 standard for secure communication
                  between agents in the Hedera ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Security visualization */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-semibold mb-6 relative z-10">Security Architecture</h3>
            
            <div className="relative p-6 bg-slate-800/70 rounded-lg border border-slate-700 mb-6">
              <div className="absolute -top-4 left-4 px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
                Your Device
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-8 w-8 text-blue-400" />
                  </div>
                  <span className="text-sm">HCS-10 Agent</span>
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
                  <span className="text-sm">Private Keys</span>
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
                Hedera Network
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-2">
                    <FileDigit className="h-8 w-8 text-indigo-400" />
                  </div>
                  <span className="text-sm">Input Topic</span>
                  <span className="text-xs text-gray-400">0.0.YYYYY</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-2">
                    <FileDigit className="h-8 w-8 text-indigo-400" />
                  </div>
                  <span className="text-sm">Output Topic</span>
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
                Other Agents
              </div>
              
              <div className="flex items-center justify-center py-4 space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agent B</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agent C</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs">Agent D</span>
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