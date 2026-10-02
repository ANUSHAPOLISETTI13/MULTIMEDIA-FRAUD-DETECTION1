/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetectionPage from './components/DetectionPage';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Smooth scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <div className="animate-fadeIn">
            <HeroSection 
              onStartDetection={() => setCurrentTab('detect')}
              onExploreHowItWorks={() => setCurrentTab('how-it-works')}
            />
            {/* Embedded Models section on Home as requested */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-2xl font-bold text-white font-display">Supported Forensic Models</h2>
                <p className="text-xs text-slate-400 mt-1">Specialized, peer-reviewed neural architecture integrations.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="p-6 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/60 transition-colors space-y-4">
                  <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Image Forensic Pipeline</div>
                  <h3 className="text-lg font-bold text-slate-200">Effort Model</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Stands for **Orthogonal Subspace Decomposition for Generalizable AI-Generated Image Detection**. It analyzes pixel grids on custom coordinate bases, detecting subtle synthesized textures left behind by Diffusion and GAN generators.
                  </p>
                  <div className="text-[10px] font-mono text-slate-500">FORMATS: JPG, JPEG, PNG, WEBP</div>
                </div>

                <div className="p-6 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/60 transition-colors space-y-4">
                  <div className="text-xs font-mono text-indigo-400 tracking-wider uppercase">Video Forensic Pipeline</div>
                  <h3 className="text-lg font-bold text-slate-200">WaveRep Model</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    State-of-the-art framework for **Synthetic Video Detection**. By monitoring wavelet frequencies and phase transitions across temporal sequences, it isolates temporal deepfake flickering that remains invisible to single-frame detection models.
                  </p>
                  <div className="text-[10px] font-mono text-slate-500">FORMATS: MP4, MOV, AVI, MKV, WEBM</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'detect':
        return <DetectionPage />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <div className="text-slate-400 py-24 text-center">Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#07090E] selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Notification Indicator (Minimal, Professional) */}
      <div className="w-full bg-[#0a1122]/90 border-b border-cyan-500/10 text-[10px] font-mono text-cyan-400/90 py-1.5 px-6 text-center flex items-center justify-center gap-2 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
        ACADEMIC PROJECT: INTEGRATED EFFORT & WAVEREP DEEPFAKE INFRASTRUCTURE
      </div>

      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />

      <main className="flex-grow">
        {renderActiveView()}
      </main>

      <Footer onTabChange={setCurrentTab} />
    </div>
  );
}
