import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgentStatusBanner from './components/AgentStatusBanner';
import TechnologySection from './components/TechnologySection';
import SauceSwapSection from './components/SauceSwapSection';
import CommunicationSection from './components/CommunicationSection';
import ManagementSection from './components/ManagementSection';
import DataSection from './components/DataSection';
import SecuritySection from './components/SecuritySection';
import ControlPanel from './components/ControlPanel';
import QuickStartSection from './components/QuickStartSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import UseCasesSection from './components/UseCasesSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AgentStatusBanner />
        <TechnologySection />
        <SauceSwapSection />
        <CommunicationSection />
        <ManagementSection />
        <DataSection />
        <SecuritySection />
        <ControlPanel />
        <QuickStartSection />
        <StatsSection />
        <PricingSection />
        <UseCasesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;