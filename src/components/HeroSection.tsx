/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Play, Cpu, ShieldCheck, Video, Image as ImageIcon } from 'lucide-react';
import heroImage from '../assets/images/hero_scanning_shield_1790950481670.jpg';

interface HeroSectionProps {
  onStartDetection: () => void;
  onExploreHowItWorks: () => void;
}

export default function HeroSection({ onStartDetection, onExploreHowItWorks }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-28">
      {/* Dynamic Digital Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#111625_1px,transparent_1px),linear-gradient(to_bottom,#111625_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/20 rounded-md text-xs font-mono text-cyan-400 tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Forensic Authentication Active
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display text-wrap-balance">
            Detect What's Real.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Expose What's Fake.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
            An AI-powered multimedia fraud detection system designed to analyze images and videos for signs of synthetic or manipulated content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={onStartDetection}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-950/40 hover:shadow-cyan-400/20 active:scale-95 transition-all duration-200"
            >
              Start Detection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExploreHowItWorks}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg active:scale-95 transition-all duration-200"
            >
              Explore How It Works
            </button>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-[450px] aspect-[4/3] sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/80 bg-slate-950/40 group">
            
            {/* Visual Scan Layer */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-scan z-10" />

            {/* Glowing HUD Labels on Graphic */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-[10px] font-mono tracking-widest text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEM_SCANNING_ACTIVE
            </div>

            <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5 bg-black/70 backdrop-blur-md p-3 rounded-md border border-slate-800 max-w-[160px]">
              <div className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">Detection Status</div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> REAL
                </span>
                <span className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> FAKE
                </span>
              </div>
            </div>

            {/* Main Visual Image / Fallback Container */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950">
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt="AI forensic multimedia detection scanning graphic" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  onError={(e) => {
                    // Fallback if image fails to render
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.fallback-graphic');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />
              ) : null}

              {/* Robust CSS Fallback Frame */}
              <div className={`fallback-graphic ${heroImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br from-[#0c1020] to-[#12192e] flex flex-col items-center justify-center p-8 text-center`}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                    AI
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-slate-100 font-display">Forensic Scanning Engine</h4>
                <p className="text-xs text-slate-400 mt-2 max-w-[240px]">
                  Detecting anomalous visual frequencies and digital synthetic residuals.
                </p>
                <div className="mt-6 flex items-center gap-6 font-mono text-[10px] text-slate-500">
                  <span>EFFORT MODEL</span>
                  <span>·</span>
                  <span>WAVEREP MODEL</span>
                </div>
              </div>
            </div>
            
            {/* Ambient vignette inner shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Small statistics/features below the hero */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 border-t border-slate-800/60 pt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start border-l border-cyan-500/20 pl-4">
            <div className="flex items-center gap-2 mb-1.5">
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Forensics Mode</span>
            </div>
            <h3 className="text-sm font-bold text-slate-100">Image Detection</h3>
            <p className="text-xs text-slate-400 mt-1">Exposes synthetic or deepfake pixel anomalies via the Effort Model.</p>
          </div>

          <div className="flex flex-col items-start border-l border-cyan-500/20 pl-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Video className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Forensics Mode</span>
            </div>
            <h3 className="text-sm font-bold text-slate-100">Video Detection</h3>
            <p className="text-xs text-slate-400 mt-1">Tracks temporal inconsistencies and frequency noise using WaveRep.</p>
          </div>

          <div className="flex flex-col items-start border-l border-cyan-500/20 pl-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Analysis Engine</span>
            </div>
            <h3 className="text-sm font-bold text-slate-100">AI-Powered Analysis</h3>
            <p className="text-xs text-slate-400 mt-1">State-of-the-art pretrained models trained on diverse synthetic sets.</p>
          </div>

          <div className="flex flex-col items-start border-l border-cyan-500/20 pl-4">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Accuracy Standard</span>
            </div>
            <h3 className="text-sm font-bold text-slate-100">Confidence-Based Results</h3>
            <p className="text-xs text-slate-400 mt-1">No binary assumptions. Results delivered with explicit metrics & scores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
