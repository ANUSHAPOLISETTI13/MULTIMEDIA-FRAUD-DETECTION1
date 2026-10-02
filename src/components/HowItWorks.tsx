/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Upload, Cpu, BarChart3, Layers, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const pipelineSteps = [
    {
      index: '01',
      title: 'Upload Media',
      description: 'Upload an image or video file directly to the secured scanning terminal.',
      icon: Upload,
      details: ['Payload Validation', 'Type Authentication', 'Size Normalization']
    },
    {
      index: '02',
      title: 'Forensic Preprocessing',
      description: 'The engine strips metadata, rescales dimensions, and extracts keyframes from video streams.',
      icon: Layers,
      details: ['Metadata Isolation', 'Frame Extraction', 'Dimension Calibration']
    },
    {
      index: '03',
      title: 'AI Core Analysis',
      description: 'Pretrained neural architectures compute pixel deviations or wavelet temporal noise.',
      icon: Cpu,
      details: ['Effort Subspace Mapping', 'WaveRep Wavelet Check', 'Anomaly Weighting']
    },
    {
      index: '04',
      title: 'Authenticity Report',
      description: 'Synthesized telemetry produces a final REAL / FAKE status with granular score statistics.',
      icon: BarChart3,
      details: ['Confidence Calculation', 'Synthetic Frame Ratios', 'Decomposition Logs']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
          How It Works
        </h2>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed text-wrap-balance">
          Deconstruct the automated pipeline engineered to verify digital authenticity.
        </p>
      </div>

      {/* Visual Pipeline Section with connected visual blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-20">
        
        {/* Animated connection arrow line for desktop */}
        <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/30 to-cyan-500/20 -z-10" />

        {pipelineSteps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div 
              key={step.index}
              className="bg-slate-950/20 border border-slate-800/60 rounded-2xl p-6 text-left hover:border-slate-700/80 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-mono font-bold text-cyan-400 tracking-wider">
                    {step.index}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Unboxed Metadata metrics/steps details */}
              <div className="mt-6 border-t border-slate-900/80 pt-4">
                <div className="flex flex-col gap-1.5 text-[10px] font-mono text-slate-500">
                  {step.details.map((detail, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Model Information Subsection */}
      <div className="bg-gradient-to-b from-[#090D1C] to-slate-950/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 text-left space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 font-display">
              Scientific AI Foundations
            </h3>
            <p className="text-xs text-slate-400 font-mono tracking-wide uppercase mt-0.5">
              Robust Deep-Learning Frameworks
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          
          {/* Image Model Detail */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-cyan-400 font-display">
              IMAGE: Effort Model
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              **Effort** is designed to map spatial pixels onto an **Orthogonal Subspace Decomposition**. It operates on the theory that computer-generated pixels (such as those from GANs or Diffusion models) follow distinct structural distributions that leave anomalies on mathematical subspaces. By extracting these orthogonal projections, the system isolates artificial relics with high generalization across multiple generators.
            </p>
          </div>

          {/* Video Model Detail */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-indigo-400 font-display">
              VIDEO: WaveRep Model
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              **WaveRep** represents a groundbreaking paradigm for **Synthetic Video Detection**. Rather than checking individual frames in isolation, WaveRep monitors temporal continuity. Artificial video synthesis (e.g. video face swaps) inevitably leaves inconsistencies in inter-frame transitions. WaveRep analyzes high-frequency wavelet temporal noise, exposing phase displacements and frame anomalies that remain invisible to standard classifiers.
            </p>
          </div>

        </div>

        {/* Realistic / Scientific Disclaimers (Strict design rule) */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-start gap-3 bg-slate-900/10 p-4 rounded-xl">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-left space-y-1">
            <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Academic Integrity & Accuracy Disclosure</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              This detection system uses state-of-the-art academic pretrained weights. In line with rigorous scientific reporting, **no fraud detection model can guarantee 100% classification accuracy or identify every highly-advanced deepfake anomaly.** Prediction scores convey mathematical model confidence and should be treated as diagnostic aids rather than infallible proof of intent.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
