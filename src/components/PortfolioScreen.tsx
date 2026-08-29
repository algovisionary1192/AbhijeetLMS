import React, { useState } from 'react';
import { PORTFOLIO_HIGHLIGHTS } from '../data/academyData';
import { motion } from 'motion/react';
import {
  Terminal,
  Cpu,
  Layers,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Send,
  Linkedin,
  Mail,
  Award,
  Zap,
  Activity
} from 'lucide-react';

interface PortfolioScreenProps {
  onOpenGetStarted: () => void;
  onNavigateToCaseStudies: () => void;
}

export const PortfolioScreen: React.FC<PortfolioScreenProps> = ({
  onOpenGetStarted,
  onNavigateToCaseStudies
}) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setInquirySent(true);
  };

  return (
    <div id="portfolio-screen" className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-12">
      {/* Executive Hero Bento */}
      <section className="grid grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 border border-black/5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[400px]"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E6FF55] rounded-full blur-[100px] opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-block px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                PRINCIPAL ARCHITECT & ADVISOR
              </span>
              <span className="inline-block px-3 py-1 bg-[#E6FF55] text-black text-[10px] font-black rounded-full uppercase tracking-wider font-mono">
                ENTERPRISE AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="font-hanken text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] tracking-tight leading-[1.08] mb-5"
            >
              Abhijeet Kumar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="font-inter text-black/60 font-medium text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            >
              Architecting resilient, production-grade AI systems and autonomous agent fleets for enterprise leaders. Specializing in high-throughput data pipelines, deterministic LLM orchestration, and strategic AI transformation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="relative z-10 flex flex-wrap items-center gap-4 pt-4 border-t border-black/5"
          >
            <button
              onClick={onNavigateToCaseStudies}
              className="bg-black text-white hover:bg-[#E6FF55] hover:text-black px-7 py-3.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#advisory-inquiry"
              className="bg-[#F3F4F6] text-black hover:bg-black hover:text-white px-7 py-3.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all border border-black/5 cursor-pointer active:scale-95"
            >
              Advisory Consultation
            </a>
          </motion.div>
        </motion.div>

        {/* Right Metric Bento */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 bg-[#111827] text-white rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between min-h-[190px]"
          >
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#E6FF55]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 font-geist">
                TRACK RECORD
              </span>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-hanken">
                12+ Yrs
              </div>
              <div className="text-xs font-black uppercase tracking-wider text-white/60 font-geist">
                Systems & AI Engineering
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 bg-[#E6FF55] rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between min-h-[190px]"
          >
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-black bg-black/10 px-2.5 py-1 rounded-full uppercase tracking-wider text-black">
                MANDATES
              </span>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-black font-hanken">
                50M+ Req/Day
              </div>
              <div className="text-xs font-black uppercase tracking-wider text-black/60 font-geist">
                Production AI Throughput
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <div>
            <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-1">
              Core Capabilities
            </span>
            <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
              Pillars of Operational Mastery
            </h2>
          </div>
          <span className="font-geist text-xs text-black/40 font-bold">
            03 Core Frameworks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: 'Deterministic Multi-Agent Fleets',
              desc: 'Moving beyond fragile prompt wrappers. Architecting state-machine supervisors, sandboxed container tool executors, AST verification loops, and automated rollback checkpoints.',
              badge: 'Agent State Machines'
            },
            {
              icon: Layers,
              title: 'High-Throughput Vector & Streaming',
              desc: 'Constructing sub-second event-driven data ingestion engines, semantic embedding tier caches, and scalable vector search pipelines handling millions of documents without degradation.',
              badge: 'Sub-second Ingestion'
            },
            {
              icon: Shield,
              title: 'Governance & Security Enclaves',
              desc: 'Establishing rigorous enterprise safeguards: PII isolation, automated adversarial red-teaming, prompt injection firewalls, and air-gapped cryptographic audit logs.',
              badge: 'Cryptographic Audits'
            }
          ].map((pillar, pIndex) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIndex * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-black/5 rounded-[36px] p-8 shadow-sm hover:shadow-md hover:border-black/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#E6FF55]" />
                  </div>
                  <h3 className="font-hanken text-xl font-black text-[#111827] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-inter text-sm text-black/60 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-black/5 text-[10px] font-black text-black/40 uppercase tracking-widest font-geist">
                  {pillar.badge}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Track Record */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <div>
            <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-1">
              History & Engagements
            </span>
            <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
              Career & Advisory Track Record
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {PORTFOLIO_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="bg-white rounded-[28px] border border-black/5 p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-black/20 shadow-sm transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 rounded-md">
                    0{index + 1}
                  </span>
                  <h3 className="font-hanken text-lg font-black text-[#111827]">
                    {item.role}
                  </h3>
                </div>
                <p className="font-inter text-sm font-semibold text-black/70">
                  {item.organization} · <span className="text-black/40 font-normal">{item.period}</span>
                </p>
                <p className="font-inter text-xs text-black/60 pt-1 max-w-3xl font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 font-geist text-xs font-black uppercase tracking-wider text-black bg-[#E6FF55] px-4 py-2 rounded-full shadow-sm">
                Verified Mandate
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Request Form Bento */}
      <section
        id="advisory-inquiry"
        className="bg-white border border-black/5 rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-2">
            Direct Executive Advisory
          </span>
          <h2 className="font-hanken text-3xl font-black text-[#111827] mb-3">
            Request an Architectural Consultation
          </h2>
          <p className="font-inter text-sm text-black/60 font-medium">
            Discuss enterprise AI roadmap design, autonomous agent fleet audits, or bespoke executive training for your engineering leadership team.
          </p>
        </div>

        {inquirySent ? (
          <div className="bg-[#E6FF55]/20 border border-black/10 rounded-[32px] p-8 max-w-xl mx-auto text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-black mx-auto" />
            <h4 className="font-hanken text-xl font-black text-[#111827]">
              Inquiry Received
            </h4>
            <p className="font-inter text-xs text-black/70 font-medium leading-relaxed">
              Thank you. Abhijeet Kumar's executive office will review your operational requirements and respond within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block font-geist text-xs font-black uppercase tracking-wider text-black/70 mb-2">
                Corporate Email Address:
              </label>
              <input
                type="email"
                required
                placeholder="name@enterprise.com"
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-black/10 rounded-2xl px-5 py-3 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black font-medium"
              />
            </div>

            <div>
              <label className="block font-geist text-xs font-black uppercase tracking-wider text-black/70 mb-2">
                System Context / Operational Bottleneck:
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your high-level AI deployment goals, current tech stack, and timeline..."
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-black/10 rounded-2xl p-5 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white hover:bg-[#E6FF55] hover:text-black py-3.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit Advisory Request</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
