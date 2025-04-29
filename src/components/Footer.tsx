import React from 'react';
import { Cpu, ExternalLink, Github, MessageSquare, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold text-white">HCS-10 Agent</span>
            </div>
            
            <p className="text-gray-400 mb-4">
              An intelligent solution for interacting with the Hedera
              ecosystem, SauceSwap, and DeFi services through secure
              communication via HCS.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#github" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="#docs" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              
              <a 
                href="#support" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#docs-hcs10" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>HCS-10 Documentation</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#docs-api" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>API Reference</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#docs-sauceswap" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>SauceSwap Official</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#docs-github" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>GitHub Repository</span>
                  <Github className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#docs-tutorials" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#recursos-iniciar" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Getting Started Guide
                </a>
              </li>
              <li>
                <a 
                  href="#recursos-faq" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a 
                  href="#recursos-ejemplos" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Usage Examples
                </a>
              </li>
              <li>
                <a 
                  href="#recursos-integracion" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Integration Guide
                </a>
              </li>
              <li>
                <a 
                  href="#recursos-politicas" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Usage Policies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#soporte-contacto" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact and Support
                </a>
              </li>
              <li>
                <a 
                  href="#soporte-discord" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>Discord Community</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#soporte-telegram" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span>Telegram Group</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#soporte-status" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Service Status
                </a>
              </li>
              <li>
                <a 
                  href="#soporte-reportar" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              Powered by Hedera HCS-10 | SauceSwap Integration | GPT-4 Enhanced
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="#terminos" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#privacidad" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <div className="flex items-center text-gray-400 text-sm">
              <Shield className="h-4 w-4 mr-1" />
              <span>Verified Security</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            This agent is an informational service and does not constitute financial advice.
            Trading decisions are the sole responsibility of the user.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            &copy; 2025 HCS-10 Agent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;