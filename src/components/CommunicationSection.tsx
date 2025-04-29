import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle, Lock, CornerDownRight } from 'lucide-react';

const CommunicationSection = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [messages, setMessages] = useState<{ text: string; sending: boolean; sent: boolean }[]>([
    { text: "Request information about SauceSwap", sending: false, sent: true },
    { text: "Show pools with highest liquidity", sending: false, sent: true },
    { text: "What is the current price of HBAR?", sending: false, sent: false }
  ]);

  // Connection steps animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Message animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessages(prev => {
        const updated = [...prev];
        if (!updated[2].sending && !updated[2].sent) {
          updated[2].sending = true;
          
          setTimeout(() => {
            setMessages(prevMsgs => {
              const updatedMsgs = [...prevMsgs];
              updatedMsgs[2].sending = false;
              updatedMsgs[2].sent = true;
              return updatedMsgs;
            });
          }, 2000);
        }
        return updated;
      });
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="comunicacion" className="py-20 relative bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure and Direct Communication
          </h2>
          <p className="text-lg text-gray-300">
            My agent allows you to establish secure connections with other HCS-10 agents,
            facilitating direct communication through the Hedera network. All
            communications are conducted through dedicated HCS topics, ensuring
            authenticity and traceability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Connection visualization */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-semibold mb-6 relative z-10">Connection Process</h3>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700 z-0"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeDot >= 0 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-400'}`}>
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Initiate connection request</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      The agent sends a connection request through HCS
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeDot >= 1 ? 'bg-green-500 text-white' : 'bg-slate-700 text-gray-400'}`}>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Automatic acceptance</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Processing and verification of the request
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeDot >= 2 ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-gray-400'}`}>
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Establishment of shared topic</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Creation of a secure communication channel
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeDot >= 3 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-gray-400'}`}>
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Secure message exchange</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Bidirectional communication through HCS topics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Messaging capabilities */}
          <div className="space-y-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Communication Capabilities</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span>Automatic establishment of connections with other agents</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span>Intelligent acceptance and management of connection requests</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span>Real-time messaging through HCS topics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span>Continuous monitoring of incoming messages</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span>AI-based automated responses</span>
                </li>
              </ul>
            </div>
            
            {/* Chat simulation */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Message Simulation</h3>
              
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-500/20 p-2 rounded-full text-indigo-400 mr-3">
                      <CornerDownRight className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-700/50 px-4 py-2 rounded-lg inline-block max-w-xs sm:max-w-md">
                        {message.text}
                      </div>
                      <div className="mt-1 text-xs text-gray-400 flex items-center">
                        {message.sending ? (
                          <span>Sending...</span>
                        ) : message.sent ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1 text-green-400" />
                            <span>Sent to topic 0.0.ZZZZZ</span>
                          </>
                        ) : (
                          <span>Pending</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;