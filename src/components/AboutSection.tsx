/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, ShieldCheck, HardDrive, Layout, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      title: 'User Upload',
      desc: 'Local file selection (Image or Video) processed inside the secured sandbox interface.',
      icon: HardDrive
    },
    {
      title: 'Preprocessing Block',
      desc: 'Isolates payload weight, decodes video keyframes, and normalizes pixel resolutions.',
      icon: Layout
    },
    {
      title: 'Detection Model',
      desc: 'Effort (Orthogonal Subspace Decomposition) / WaveRep (Wavelet Analysis) inference engines.',
      icon: Cpu
    },
    {
      title: 'Authenticity Report',
      desc: 'Computes prediction status, confidence scores, and visual segment timelines.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-left">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
          About the Project
        </h2>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed text-wrap-balance">
          Discover the scope, academic context, and structural system design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left column explanation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-100 font-display">
              Final-Year Academic Project
            </h3>
            <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              Scope & Core Objectives
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            **Multimedia Fraud Detection** is a final-year academic research project engineered to resolve the growing threat of realistic synthetic media. With the rapid evolution of generative AI tools (such as diffusion networks and deepfake video renderers), verifying the source and authenticity of digital assets has become a critical cybersecurity necessity.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            The primary objective of this project is to integrate and showcase state-of-the-art forensic detection algorithms into a single intuitive, production-grade diagnostic terminal. By focusing strictly on two highly critical fields, the system achieves maximum specificity:
          </p>

          {/* Unboxed Bullet List */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-xs font-semibold text-slate-200">AI-Generated Image Detection:</strong>
                <p className="text-xs text-slate-400 mt-0.5">Leverages the **Effort Model** to isolate artificial noise structures on orthogonal pixel subspaces.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-xs font-semibold text-slate-200">Synthetic / Deepfake Video Detection:</strong>
                <p className="text-xs text-slate-400 mt-0.5">Deploys the **WaveRep Model** to trace temporal phase fluctuations and wavelet anomalies in video keyframes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column technical architecture block */}
        <div className="lg:col-span-6 bg-slate-950/35 border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
              System Architecture Flow
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              End-to-end data pipelines from ingestion to metric compilation.
            </p>
          </div>

          {/* Vertical step flowchart */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Connection line between nodes */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[21px] top-10 bottom-0 w-[1px] bg-slate-850 z-0" />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-200 font-display flex items-center gap-2">
                        {step.title}
                        {idx < steps.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden group-hover:inline-block" />
                        )}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
