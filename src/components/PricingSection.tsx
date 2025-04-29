import React, { useState } from 'react';
import { CreditCard, CheckCircle, HelpCircle, Info } from 'lucide-react';

const PricingSection = () => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  
  return (
    <section id="precios" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Usage Model
          </h2>
          <p className="text-lg text-gray-300">
            The agent operates under a transparent HBAR-based model. Each query
            consumes a small amount of HBAR to cover Hedera network costs,
            with predictable fees and no hidden costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Basic plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col">
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10">
              <h3 className="text-xl font-semibold mb-2">Basic Connection</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">0.1</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/connection</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Perfect for individual users who need occasional
                access to SauceSwap information.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Connection establishment with the agent</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Basic SauceSwap queries (0.01 ℏ/query)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Basic token and price information</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Up to 10 queries per day</span>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 mr-2 text-gray-400">
                  <HelpCircle 
                    className="h-5 w-5 cursor-help" 
                    onMouseEnter={() => setShowTooltip('basic')}
                    onMouseLeave={() => setShowTooltip(null)}
                  />
                </div>
                <span className="text-gray-400">Continuous monitoring not included</span>
                
                {showTooltip === 'basic' && (
                  <div className="absolute left-7 bottom-6 bg-slate-800 p-3 rounded-lg shadow-lg w-60 z-10 text-sm">
                    Continuous monitoring allows the agent to constantly supervise the
                    SauceSwap ecosystem and alert you about important changes.
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Connect Now
              </a>
            </div>
          </div>
          
          {/* Standard plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border-2 border-purple-500/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/10">
              <h3 className="text-xl font-semibold mb-2">Standard Connection</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">0.5</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/connection</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Ideal for active traders who need detailed
                and updated information from SauceSwap.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Everything included in Basic Connection</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Advanced queries (pools, tokens, analysis)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Detailed liquidity and reserves information</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Up to 50 queries per day</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Basic monitoring (0.1 ℏ/day)</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Connect Now
              </a>
            </div>
          </div>
          
          {/* Premium plan */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 flex flex-col">
            <div className="p-6 bg-gradient-to-br from-teal-900/30 to-teal-800/10">
              <h3 className="text-xl font-semibold mb-2">Premium Connection</h3>
              <div className="flex items-end">
                <div className="text-4xl font-bold">1.5</div>
                <div className="ml-1 text-xl font-medium">ℏ</div>
                <div className="text-sm text-gray-400 ml-2 mb-1">/connection</div>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                For professionals and applications that require continuous
                monitoring and customized alerts.
              </p>
            </div>
            
            <div className="p-6 flex-grow space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Everything included in Standard Connection</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Unlimited queries per day</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>24/7 continuous monitoring (0.3 ℏ/day)</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>Customized price and liquidity alerts</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span>API for application integration</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50">
              <a 
                href="#conectar" 
                className="block w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 rounded-lg text-white font-medium text-center transition-colors"
              >
                Connect Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg">
              <Info className="h-6 w-6 text-blue-400" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainability Benefits</h3>
              <p className="text-gray-300">
                Fees allow maintaining the service active 24/7, ensuring
                constant updates and access to the most recent information from the
                SauceSwap and Hedera ecosystem. Additionally, they contribute to the maintenance
                of infrastructure and continuous development of new features.
              </p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Total Transparency</div>
                  <p className="text-sm text-gray-400">
                    All fees are visible and predictable, with no hidden costs.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Pay-as-you-go Model</div>
                  <p className="text-sm text-gray-400">
                    You only pay for what you use, without fixed monthly fees.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="font-medium mb-1">Continuous Updates</div>
                  <p className="text-sm text-gray-400">
                    Access to new features and improvements at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 border-t border-slate-700 pt-6 flex items-center justify-between">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-purple-400 mr-2" />
              <span>Automatic payments via HBAR from your Hedera account</span>
            </div>
            
            <a 
              href="#preguntas" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View frequently asked questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;