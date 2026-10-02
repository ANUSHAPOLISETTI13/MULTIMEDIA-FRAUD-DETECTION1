/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Github, ChevronRight } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05070a] border-t border-slate-900 py-12 text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Column 1: Brand & Desc */}
        <div className="md:col-span-5 space-y-4">
          <button 
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-sm tracking-tight text-white font-display">
              Multimedia Fraud Detection System
            </span>
          </button>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            An advanced academic AI platform designed to analyze images and videos for signs of synthetic, manipulated, or deepfake content. Securely preserving visual authenticity.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">System Navigation</h4>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
            {['home', 'detect', 'how-it-works', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-left capitalize"
              >
                <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Column 3: Social & Repos */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Repository References</h4>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-950/60 border border-slate-850 hover:border-slate-800 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

      </div>

      {/* Sub Footer Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
        <div>
          © {currentYear} Multimedia Fraud Detection System. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>Final Year Project</span>
          <span>·</span>
          <span>Effort / WaveRep Academic Engine</span>
        </div>
      </div>
    </footer>
  );
}
