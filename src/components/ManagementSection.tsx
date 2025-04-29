import React from 'react';
import { CheckCircle2, BellRing, Zap, RefreshCcw, UserCheck } from 'lucide-react';

const ManagementSection = () => {
  return (
    <section className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent Management
          </h2>
          <p className="text-lg text-gray-300">
            The agent automatically manages its connections, incoming requests, and messages,
            using AI to determine appropriate actions. It continuously monitors its
            input topic for new connection requests and messages, responding
            intelligently to each interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
              <BellRing className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Active Monitoring</h3>
            
            <p className="text-gray-300 mb-5">
              Continuous monitoring of designated HCS topics to detect new requests
              and incoming messages in real time.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Authenticity verification</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Asynchronous processing</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>New message alerts</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all">
              <UserCheck className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Connection Management</h3>
            
            <p className="text-gray-300 mb-5">
              Automatic processing of incoming connection requests and maintenance
              of existing connections with other HCS-10 agents.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Identity verification</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Automatic confirmation</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Active connection tracking</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-blue-500/30 transition-all">
              <Zap className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Message Processing</h3>
            
            <p className="text-gray-300 mb-5">
              Intelligent analysis and processing of incoming messages using AI
              to generate contextual and accurate responses.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Semantic analysis</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Contextual responses</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Conversation memory</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-500/30 group-hover:to-green-500/30 transition-all">
              <RefreshCcw className="h-7 w-7 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Message Tracking</h3>
            
            <p className="text-gray-300 mb-5">
              Tracking and recording all messages by topic and sequence number
              to ensure communication integrity.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Immutable records</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Message sequencing</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span>Communication auditing</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Agent Status</h4>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Active connections</div>
                      <div className="text-lg font-medium">12</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Messages processed today</div>
                      <div className="text-lg font-medium">143</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Response time</div>
                      <div className="text-lg font-medium">1.2s</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-4">Advanced Management Capabilities</h3>
                <p className="text-gray-300 mb-4">
                  The HCS-10 agent is equipped with advanced management capabilities that allow it to
                  handle multiple connections and process various types of messages simultaneously,
                  all while maintaining an immutable record of communications on the Hedera network.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-blue-400 font-medium">Multi-point management</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-purple-400 font-medium">Intelligent routing</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-teal-400 font-medium">Automatic prioritization</span>
                  </div>
                  <div className="bg-slate-800/50 px-3 py-2 rounded border border-slate-700 text-sm">
                    <span className="text-indigo-400 font-medium">Secure authentication</span>
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

export default ManagementSection;