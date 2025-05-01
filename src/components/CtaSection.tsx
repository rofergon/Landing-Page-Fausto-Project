import React from 'react';
import { ArrowRight, Cpu, ChevronRight, BarChart3, Image } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="conectar" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
            Build Your SauceSwap Fausto Agent
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create your own AI agent that interacts with SauceSwap v2 data on the Hedera network. 
            Generate real-time charts, analyze token data, and provide DeFi insights through
            a powerful conversational interface.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/rofergon/Fausto_Project-Hedera_HCS-10" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 flex items-center justify-center group"
            >
              Get Started on GitHub
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#iniciar" 
              className="px-8 py-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-medium transition-colors flex items-center justify-center"
            >
              <Cpu className="mr-2 h-5 w-5" />
              Installation Guide
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <span className="text-blue-400 font-medium">1</span>
              </div>
              <h3 className="font-semibold text-lg">HCS-10 Integration</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leverage the HCS-10 standard for secure, decentralized communication
              between agents on the Hedera network.
            </p>
            <a 
              href="#tecnologia" 
              className="text-blue-400 flex items-center hover:text-blue-300 transition-colors"
            >
              <span>View architecture details</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <BarChart3 className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">SauceSwap Plugins</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Specialized plugins for accessing SauceSwap data, including
              pools, tokens, and advanced search capabilities.
            </p>
            <a 
              href="#sauceswap" 
              className="text-purple-400 flex items-center hover:text-purple-300 transition-colors"
            >
              <span>Explore SauceSwap plugins</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                <Image className="h-5 w-5 text-teal-400" />
              </div>
              <h3 className="font-semibold text-lg">Chart Generation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Generate candlestick charts for any SauceSwap pool with customizable
              time ranges and permanent storage on Hedera.
            </p>
            <a 
              href="#charts" 
              className="text-teal-400 flex items-center hover:text-teal-300 transition-colors"
            >
              <span>View chart capabilities</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <Cpu className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Ready to Build Your Own DeFi Agent?</h3>
              <p className="text-gray-300 mb-4 text-center md:text-left">
                Join the community of developers building intelligent agents for the Hedera
                ecosystem and bring DeFi data to life through conversational AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/rofergon/Fausto_Project-Hedera_HCS-10" 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-medium transition-all duration-300 flex items-center justify-center"
                >
                  View Source Code
                </a>
                
                <a 
                  href="#iniciar" 
                  className="px-6 py-3 rounded-lg bg-transparent border border-slate-600 hover:border-slate-500 text-white font-medium transition-colors flex items-center justify-center"
                >
                  Setup Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;