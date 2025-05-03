import { Activity } from 'lucide-react';

const AgentStatusBanner = () => {
  return (
    <div className="bg-slate-800/80 border-t border-b border-slate-700/50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <a 
            href="https://hashscan.io/testnet/account/0.0.5932173?pc=1&ps=1&pt=1&pf=1&pa=1&pr=1&ph=1&pn=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center mb-1"
          >
            <div className="w-2 h-2 rounded-full mr-2 bg-green-400 animate-pulse"></div>
            Active Agent | Network: Testnet | ID: 0.0.5932173
            <Activity className="ml-2 h-4 w-4 opacity-60" />
          </a>
          <p className="text-xs text-gray-400/70 italic">
            Click to view agent details on HashScan ↗
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentStatusBanner; 