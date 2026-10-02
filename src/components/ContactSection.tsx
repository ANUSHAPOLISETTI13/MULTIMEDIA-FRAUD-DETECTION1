/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, BookOpen, Building, Github, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending feedback/review
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  const projectInfo = [
    {
      label: 'Student Name',
      value: '[Student Name]',
      desc: 'Lead Researcher & Developer',
      icon: User
    },
    {
      label: 'Department',
      value: '[Department of Computer Science & Engineering]',
      desc: 'Forensics & Cyber Security Lab',
      icon: BookOpen
    },
    {
      label: 'Institution',
      value: '[Academic Institution]',
      desc: 'Final Year Project Assignment',
      icon: Building
    }
  ];

  const repos = [
    { label: 'GitHub Profile', url: 'https://github.com/', value: 'github.com/student' },
    { label: 'Project Repository', url: 'https://github.com/', value: 'github.com/student/multimedia-fraud-detection' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
          Project Information
        </h2>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed text-wrap-balance">
          Academic credentials, research references, and direct contact resources.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left: Academic Credentials */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-100 font-display">
              Academic Assignment
            </h3>
            <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              Curriculum Metadata
            </p>
          </div>

          <div className="space-y-4">
            {projectInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-950/20 border border-slate-800/60 p-4 rounded-xl flex items-start gap-4 hover:border-slate-700/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-slate-500">{info.label}</span>
                    <h4 className="text-sm font-semibold text-slate-200">{info.value}</h4>
                    <p className="text-xs text-slate-400">{info.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Repos links */}
          <div className="space-y-4 pt-4 border-t border-slate-900/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Repositories & Codebases</h4>
            <div className="flex flex-col gap-3">
              {repos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#090D1C]/50 hover:bg-[#0c1328]/70 border border-slate-800 hover:border-slate-700 transition-all text-xs"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono text-slate-500 uppercase">{repo.label}</div>
                    <span className="font-semibold text-cyan-400 hover:underline">{repo.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Message Form for Feedback */}
        <div className="lg:col-span-6 bg-[#090D1C]/40 border border-slate-800/80 p-6 md:p-8 rounded-2xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-100 font-display">
              Submit Inquiry or Review
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions regarding model performance, Effort/WaveRep weights, or research data? Send a message.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/20 border border-emerald-500/25 p-6 rounded-xl flex flex-col items-center text-center space-y-3 py-12 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">Message Transmitted Successfully</h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Thank you. Your inquiry has been routed to the local project container.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Professor Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg py-2.5 px-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. smith@institution.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg py-2.5 px-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5">Message / Evaluation Notes</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your review or questions here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg py-2.5 px-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg active:scale-95 transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5" />
                Transmit Message
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
