import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/academyData';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Code2,
  Sparkles,
  Zap
} from 'lucide-react';

interface CaseStudiesScreenProps {
  onOpenGetStarted: () => void;
  onSelectCourseById: (courseId: string) => void;
}

export const CaseStudiesScreen: React.FC<CaseStudiesScreenProps> = ({
  onOpenGetStarted,
  onSelectCourseById
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(
    CASE_STUDIES_DATA[0].id
  );

  const activeCase =
    CASE_STUDIES_DATA.find((c) => c.id === selectedCaseId) ||
    CASE_STUDIES_DATA[0];

  return (
    <div id="case-studies-screen" className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-12">
      {/* Header Bento */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-[40px] p-8 md:p-12 border border-black/5 shadow-sm relative overflow-hidden flex flex-col justify-between"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest">
              DEPLOYMENT RETROSPECTIVES
            </span>
            <span className="inline-block px-3 py-1 bg-[#E6FF55] text-black text-[10px] font-black rounded-full uppercase tracking-wider font-mono">
              ENTERPRISE AUDITS
            </span>
          </div>

          <h1 className="font-hanken text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.1] mb-4">
            Production Case Studies
          </h1>
          <p className="font-inter text-base md:text-lg text-black/60 font-medium leading-relaxed">
            Rigorous architectural retrospectives detailing how enterprise clients deploy autonomous multi-agent networks, real-time vector pipelines, and zero-leakage RAG systems at scale.
          </p>
        </div>
      </motion.div>

      {/* Selector Tabs Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASE_STUDIES_DATA.map((cs, idx) => {
          const isSelected = cs.id === activeCase.id;
          return (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.35 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`p-6 rounded-[28px] text-left transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-[#111827] border-black/5 hover:border-black/20 shadow-sm'
              }`}
            >
              <span
                className={`font-geist text-[10px] font-black uppercase tracking-widest block mb-2 px-2.5 py-0.5 rounded-full w-fit ${
                  isSelected
                    ? 'bg-[#E6FF55] text-black'
                    : 'bg-[#F3F4F6] text-black/60'
                }`}
              >
                {cs.clientCategory}
              </span>
              <h3 className="font-hanken text-lg font-black leading-snug">
                {cs.title}
              </h3>
            </motion.button>
          );
        })}
      </div>

      {/* Active Case Study Detail Bento View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-[40px] border border-black/5 p-8 md:p-12 shadow-sm space-y-10"
        >
          {/* Title & Summary */}
          <div className="border-b border-black/5 pb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                {activeCase.clientCategory}
              </span>
              <span className="font-geist text-xs text-black/40 font-bold">
                Validated Production SLA
              </span>
            </div>
            <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827] mb-4">
              {activeCase.title}
            </h2>
            <p className="font-inter text-base text-black/70 font-medium leading-relaxed">
              {activeCase.summary}
            </p>
          </div>

          {/* Quantified Metrics Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                Quantified Operational ROI
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeCase.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9FAFB] border border-black/5 rounded-[24px] p-6 text-center shadow-sm"
                >
                  <div className="font-hanken text-3xl font-black text-[#111827] mb-1">
                    {metric.value}
                  </div>
                  <div className="font-geist text-xs text-black/50 font-bold">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F9FAFB] border border-black/5 rounded-[28px] p-7 space-y-3">
              <div className="flex items-center gap-2 text-black">
                <Cpu className="w-4 h-4" />
                <h4 className="font-geist text-xs font-black uppercase tracking-wider">
                  Architecture Blueprint
                </h4>
              </div>
              <p className="font-inter text-sm text-black/60 font-medium leading-relaxed">
                {activeCase.architectureSummary}
              </p>
            </div>

            <div className="bg-[#F9FAFB] border border-black/5 rounded-[28px] p-7 space-y-4">
              <div className="flex items-center gap-2 text-black">
                <Code2 className="w-4 h-4" />
                <h4 className="font-geist text-xs font-black uppercase tracking-wider">
                  Core Technology Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCase.techStack.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className="bg-white border border-black/10 text-black text-xs font-black px-3.5 py-1.5 rounded-xl shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Outcomes */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                Validated Production Outcomes
              </span>
            </div>
            <div className="space-y-3">
              {activeCase.outcomes.map((outcome, oidx) => (
                <div
                  key={oidx}
                  className="bg-[#F9FAFB] border border-black/5 rounded-2xl p-4 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E6FF55] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="font-inter text-sm text-black/80 font-medium leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Bento */}
          <div className="p-8 bg-[#111827] text-white rounded-[32px] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-hanken text-lg font-black text-white mb-1">
                Implement Similar Topologies in Your Organization
              </h4>
              <p className="font-inter text-xs text-white/60 font-medium">
                Enroll your engineering leaders in Abhijeet Academy or request a private architectural sprint.
              </p>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="px-6 py-3 rounded-full bg-[#E6FF55] text-black font-inter text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-sm shrink-0 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Initiate Cohort Enrollment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
