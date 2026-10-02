/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ currentTab, onTabChange }: NavbarProps) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'detect', label: 'Detect' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07090E]/85 backdrop-blur-md border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Logo & Title */}
        <button 
          onClick={() => onTabChange('home')}
          className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
            <Shield className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <div className="absolute inset-0 bg-cyan-500/10 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-semibold text-base tracking-tight text-slate-100 group-hover:text-white transition-colors font-display">
            Multimedia Fraud Detection
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onTabChange(link.id)}
              className={`relative py-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1 text-xs uppercase tracking-wider ${
                currentTab === link.id
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {link.label}
              {currentTab === link.id && (
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: CTA Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onTabChange('detect')}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-950/40 hover:shadow-cyan-400/20 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Start Detection
          </button>
        </div>
      </div>
    </header>
  );
}
