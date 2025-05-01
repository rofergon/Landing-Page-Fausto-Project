import React, { useEffect, useRef } from 'react';
import { Cpu, Podcast as Broadcast, BrainCircuit, Clock, Server, Image } from 'lucide-react';

const TechnologySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      id="tecnologia" 
      ref={sectionRef}
      className="py-20 relative bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrated Architecture
          </h2>
          <p className="text-lg text-gray-300">
            The project seamlessly integrates the HCS-10 standard for communication between agents 
            with specialized SauceSwap plugins and LangChain, creating a complete solution for 
            interacting with DeFi data through a conversational AI agent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-blue-500 to-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">HCS-10 Messaging</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Complete implementation of the HCS-10 standard for secure and decentralized agent communication using Hedera Consensus Service topics.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                Message Automation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                HCS Topic Management
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                Connection Handling
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-purple-500 to-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LangChain Integration</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Advanced AI capabilities using LangChain for natural language processing and tool execution with structured plugins.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                Agent Executor
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                Memory Buffer
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                Structured Tools
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SauceSwap Plugins</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Specialized plugins for accessing SauceSwap data, with modular design for extensibility.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>
                Pool &amp; Token Data
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>
                SauceSwap API SDK
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>
                Chart Generation
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-cyan-500 to-indigo-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">HCS-3 Integration</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Store charts and other content permanently on the Hedera network using HCS-3 inscriptions.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                Image Storage
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                HRL Generation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                Content Compression
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-green-500 to-cyan-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Broadcast className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hedera Topics</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Structured communication channels on the Hedera network for different types of messages.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
                Inbound Topics
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
                Outbound Topics
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
                Connection Topics
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 animate-on-scroll opacity-0 flex flex-col">
            <div className="bg-gradient-to-br from-amber-500 to-green-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Message Processing</h3>
            <p className="text-gray-300 mt-2 flex-grow">
              Sophisticated handling of messages with automated monitoring and processing.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                Batch Processing
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                HRL Detection
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                Watchdog Timer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;