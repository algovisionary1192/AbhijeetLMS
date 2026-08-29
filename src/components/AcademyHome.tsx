import React, { useState } from 'react';
import { Course, UserObjective, Certification } from '../types';
import { motion } from 'motion/react';
import {
  Terminal,
  ArrowRight,
  Signal,
  Clock,
  User,
  LayoutDashboard,
  BookOpen,
  Award,
  CheckCircle2,
  Play,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

interface AcademyHomeProps {
  courses: Course[];
  objectives: UserObjective[];
  certifications: Certification[];
  onSelectCourse: (course: Course) => void;
  onViewAllModules: () => void;
  onOpenGetStarted: () => void;
  onNavigateToDashboard: () => void;
  onUpdateObjectiveProgress: (id: string, newProgress: number) => void;
}

export const AcademyHome: React.FC<AcademyHomeProps> = ({
  courses,
  objectives,
  certifications,
  onSelectCourse,
  onViewAllModules,
  onOpenGetStarted,
  onNavigateToDashboard,
  onUpdateObjectiveProgress
}) => {
  const [commandCenterTab, setCommandCenterTab] = useState<'overview' | 'courses' | 'certifications'>('overview');
  const [interactiveSimRunning, setInteractiveSimRunning] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  // Take the 3 primary courses for preview matching the mockup
  const previewCourses = courses.slice(0, 3);

  const handleRunSimulation = (objectiveId: string) => {
    setInteractiveSimRunning(true);
    setSimOutput('Initializing sandbox container on Firecracker VM...');

    setTimeout(() => {
      setSimOutput('Executing AST verification & sandbox tests (4/4 passed)...');
    }, 1000);

    setTimeout(() => {
      setSimOutput('Completed! Progress updated from 75% -> 85% with validated telemetry logs.');
      setInteractiveSimRunning(false);
      onUpdateObjectiveProgress(objectiveId, 85);
    }, 2200);
  };

  return (
    <div id="academy-page-view" className="w-full max-w-[1400px] mx-auto px-6 md:px-10 space-y-12">
      {/* Bento Grid Hero Layout */}
      <section id="hero-bento-grid" className="grid grid-cols-12 gap-5">
        {/* Big Hero Card (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 border border-black/5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[440px]"
        >
          {/* Subtle neon glow in the corner */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E6FF55] rounded-full blur-[100px] opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-block px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                EXECUTIVE AI ACADEMY
              </span>
              <span className="inline-block px-3 py-1 bg-[#E6FF55] text-black text-[10px] font-black rounded-full uppercase tracking-wider font-mono">
                COHORT 2026 ACTIVE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="font-hanken text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-[#111827] mb-5"
            >
              Architecting Production <br className="hidden sm:inline" />
              Autonomous Agent Fleets.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="font-inter text-black/60 font-medium max-w-xl text-base md:text-lg leading-relaxed mb-8"
            >
              Learn. Build. Apply. Practical learning for engineering leaders and AI architects who want to deploy deterministic multi-agent systems and real-time streaming pipelines.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.45 }}
            className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5"
          >
            <div className="flex flex-wrap gap-3">
              <button
                id="explore-catalog-hero-btn"
                onClick={onViewAllModules}
                className="bg-black text-white hover:bg-[#E6FF55] hover:text-black px-7 py-3.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="view-syllabus-hero-btn"
                onClick={() => onSelectCourse(courses[0])}
                className="bg-[#F3F4F6] text-black hover:bg-black hover:text-white px-7 py-3.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all border border-black/5 cursor-pointer active:scale-95"
              >
                View Syllabus
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 border-2 border-white shadow-sm flex items-center justify-center text-[11px] font-bold text-white">AK</div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 border-2 border-white shadow-sm flex items-center justify-center text-[11px] font-bold text-white">EV</div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 border-2 border-white shadow-sm flex items-center justify-center text-[11px] font-bold text-white">MR</div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 font-geist">Vetted Architects</span>
                <span className="text-xs font-black text-black">840+ Enrolled</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Bento Side Blocks (4 cols) */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5">
          {/* Lime Accent Bento Block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 bg-[#E6FF55] rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-black bg-black/10 text-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                TELEMETRY LIVE
              </span>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-1 text-black font-hanken">
                99.98%
              </div>
              <div className="text-xs font-black uppercase tracking-wider text-black/60 font-geist">
                Agent Determinism SLA
              </div>
            </div>
          </motion.div>

          {/* Dark Charcoal Bento Block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 bg-[#111827] text-white rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex justify-between items-center">
              <div className="w-3 h-3 rounded-full bg-[#E6FF55] shadow-[0_0_15px_rgba(230,255,85,0.8)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-geist">
                SECURE RUNTIME
              </span>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1 font-geist">
                Execution Sandbox
              </div>
              <div className="text-2xl font-black text-white font-hanken">
                Firecracker MicroVM
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Bento Grid: The Architecture of Mastery */}
      <section id="architecture-of-mastery-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 px-2">
          <div>
            <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-1">
              Methodology & Execution
            </span>
            <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
              The Architecture of Mastery
            </h2>
          </div>
          <span className="font-geist text-xs text-black/40 font-bold">
            04 Phases // Production Readiness
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Step 1 */}
          <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] font-black bg-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  01 // INITIATE
                </span>
                <span className="w-2 h-2 rounded-full bg-black/20" />
              </div>
              <h3 className="font-hanken text-xl font-black text-[#111827] mb-2">
                Enroll
              </h3>
              <p className="font-inter text-sm text-black/60 leading-relaxed font-medium">
                Select high-impact curriculum tracks tailored to your operational bottlenecks.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-black/5 text-[10px] font-black text-black/40 uppercase tracking-widest font-geist">
              Targeted Diagnostic
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] font-black bg-[#E6FF55] text-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  02 // INGEST
                </span>
                <span className="w-2 h-2 rounded-full bg-black/20" />
              </div>
              <h3 className="font-hanken text-xl font-black text-[#111827] mb-2">
                Learn
              </h3>
              <p className="font-inter text-sm text-black/60 leading-relaxed font-medium">
                Absorb dense, structured patterns through live architectural reviews and retrospectives.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-black/5 text-[10px] font-black text-black/40 uppercase tracking-widest font-geist">
              Dense Architecture
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] font-black bg-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  03 // EXECUTE
                </span>
                <span className="w-2 h-2 rounded-full bg-black/20" />
              </div>
              <h3 className="font-hanken text-xl font-black text-[#111827] mb-2">
                Build
              </h3>
              <p className="font-inter text-sm text-black/60 leading-relaxed font-medium">
                Deploy multi-agent supervisors and pipelines inside isolated sandboxed MicroVMs.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-black/5 text-[10px] font-black text-black/40 uppercase tracking-widest font-geist">
              Isolated Sandboxes
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#111827] text-white rounded-[32px] p-8 border border-black/5 shadow-sm hover:border-black/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] font-black bg-[#E6FF55] text-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  04 // VALIDATE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E6FF55]" />
              </div>
              <h3 className="font-hanken text-xl font-black text-white mb-2">
                Certify
              </h3>
              <p className="font-inter text-sm text-white/70 leading-relaxed font-medium">
                Prove your capabilities with cryptographic credentials and immutable verification hashes.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest font-geist">
              Verifiable Hash
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Bento Grid */}
      <section id="curriculum-preview-section" className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <div>
            <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-1">
              Curriculum Tracks
            </span>
            <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
              Engineered for Production
            </h2>
          </div>
          <button
            id="view-all-modules-btn"
            onClick={onViewAllModules}
            className="font-geist text-xs font-black text-black hover:text-[#000000] flex items-center gap-1.5 uppercase tracking-widest transition-colors group cursor-pointer bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm hover:bg-[#E6FF55]"
          >
            <span>VIEW ALL MODULES</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCourses.map((course, cIndex) => (
            <motion.article
              key={course.id}
              id={`course-card-${course.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cIndex * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-[36px] border border-black/5 overflow-hidden shadow-sm hover:shadow-md hover:border-black/20 transition-all duration-300 flex flex-col justify-between group p-6"
            >
              <div>
                {/* Course Thumbnail inside rounded bento frame */}
                <div className="relative h-48 w-full rounded-[24px] overflow-hidden bg-[#111827] mb-6">
                  <img
                    src={course.imageUrl}
                    alt={course.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider">
                    {course.category}
                  </div>
                </div>

                {/* Course Metadata */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-geist text-[11px] font-bold text-black bg-[#F3F4F6] px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Signal className="w-3 h-3 text-black" />
                      {course.level}
                    </span>
                    <span className="font-geist text-[11px] font-bold text-black/60 bg-[#F3F4F6] px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-black/60" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-hanken text-xl font-black text-[#111827] mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="font-inter text-sm text-black/60 font-medium mb-6 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-black/5">
                <button
                  id={`view-syllabus-btn-${course.id}`}
                  onClick={() => onSelectCourse(course)}
                  className="w-full bg-black text-white hover:bg-[#E6FF55] hover:text-black py-3 rounded-2xl font-inter text-xs font-black uppercase tracking-wider transition-all flex justify-between items-center px-5 cursor-pointer active:scale-95 group/btn"
                >
                  <span>VIEW SYLLABUS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Command Center Bento Preview */}
      <section id="command-center-preview-section" className="space-y-6">
        <div className="bg-white rounded-[40px] p-6 md:p-10 border border-black/5 shadow-sm relative overflow-hidden">
          {/* Section Header */}
          <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4 pb-6 border-b border-black/5">
            <div>
              <span className="font-geist text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block mb-1">
                Interactive Environment
              </span>
              <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
                Your Academy Command Center
              </h2>
            </div>
            <p className="font-inter text-sm text-black/60 max-w-sm font-medium">
              High-density telemetry dashboard with live MicroVM sandboxes, automated test runners, and cryptographic certification logs.
            </p>
          </div>

          {/* Bento Subgrid Inside Command Center */}
          <div className="grid grid-cols-12 gap-5">
            {/* Left Nav (4 cols) */}
            <div className="col-span-12 lg:col-span-4 bg-[#F9FAFB] rounded-[32px] p-5 border border-black/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-sm">
                    AK
                  </div>
                  <div>
                    <div className="font-hanken text-xs font-black text-[#111827]">
                      Student Profile
                    </div>
                    <div className="font-geist text-[10px] font-black text-[#000000] bg-[#E6FF55] px-2 py-0.5 rounded-full inline-flex items-center gap-1 mt-0.5">
                      <Sparkles className="w-2.5 h-2.5" /> PRO ACCESS
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="space-y-1.5">
                  <button
                    id="cmd-nav-overview"
                    onClick={() => setCommandCenterTab('overview')}
                    className={`w-full rounded-2xl px-4 py-3 flex items-center gap-3 text-xs font-black uppercase tracking-wider transition-all text-left ${
                      commandCenterTab === 'overview'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-black/60 hover:bg-black/5'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Overview</span>
                  </button>

                  <button
                    id="cmd-nav-courses"
                    onClick={() => setCommandCenterTab('courses')}
                    className={`w-full rounded-2xl px-4 py-3 flex items-center gap-3 text-xs font-black uppercase tracking-wider transition-all text-left ${
                      commandCenterTab === 'courses'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-black/60 hover:bg-black/5'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>My Courses</span>
                  </button>

                  <button
                    id="cmd-nav-certifications"
                    onClick={() => setCommandCenterTab('certifications')}
                    className={`w-full rounded-2xl px-4 py-3 flex items-center gap-3 text-xs font-black uppercase tracking-wider transition-all text-left ${
                      commandCenterTab === 'certifications'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-black/60 hover:bg-black/5'
                    }`}
                  >
                    <Award className="w-4 h-4" />
                    <span>Certifications</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 mt-4">
                <button
                  id="open-full-dashboard-btn"
                  onClick={onNavigateToDashboard}
                  className="w-full flex items-center justify-between text-xs font-black text-black bg-white hover:bg-[#E6FF55] p-3 rounded-2xl border border-black/5 transition-all shadow-sm"
                >
                  <span>Open Full Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Display Area (8 cols) */}
            <div className="col-span-12 lg:col-span-8 bg-[#F9FAFB] rounded-[32px] p-6 md:p-8 border border-black/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-hanken text-lg font-black text-[#111827]">
                    {commandCenterTab === 'overview' && 'Active Objectives'}
                    {commandCenterTab === 'courses' && 'Active Cohorts & Progress'}
                    {commandCenterTab === 'certifications' && 'Verified Credentials'}
                  </h4>

                  <span className="font-geist text-[10px] font-black uppercase tracking-widest text-black/40 bg-white px-3 py-1 rounded-full border border-black/5">
                    Live Telemetry
                  </span>
                </div>

                {/* Tab: Overview */}
                {commandCenterTab === 'overview' && (
                  <div className="space-y-4">
                    {/* Progress Item 1 */}
                    <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-hanken text-sm font-black text-[#111827] block">
                            Module 3: Automation Frameworks
                          </span>
                          <span className="font-geist text-xs text-black/50 font-medium">
                            LLM Orchestration for Enterprise · 85% Sandbox Passes
                          </span>
                        </div>
                        <span className="font-mono text-sm font-black text-black bg-[#E6FF55] px-2.5 py-0.5 rounded-lg">
                          {objectives[0]?.progress || 75}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${objectives[0]?.progress || 75}%` }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          className="h-full bg-black rounded-full"
                        />
                      </div>

                      <div className="flex flex-wrap justify-between items-center pt-1 gap-2">
                        <span className="text-[11px] font-geist text-black/50 font-semibold">
                          Due: {objectives[0]?.dueDate || 'In 3 days'}
                        </span>
                        <button
                          id="run-sandbox-simulation-btn"
                          disabled={interactiveSimRunning}
                          onClick={() => handleRunSimulation('obj-1')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black hover:bg-[#E6FF55] hover:text-black text-xs font-black text-white transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          <Play className="w-3 h-3" />
                          <span>{interactiveSimRunning ? 'Executing...' : 'Run Sandbox Tests'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Progress Item 2 */}
                    <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-hanken text-sm font-black text-[#111827] block">
                            Capstone Project: Data Pipeline
                          </span>
                          <span className="font-geist text-xs text-black/50 font-medium">
                            Data Pipeline Architecture · Streaming Ingestion
                          </span>
                        </div>
                        <span className="font-geist text-xs text-black/40 font-bold">
                          In Progress
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div className="h-full bg-black/30 rounded-full w-1/4" />
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-[11px] font-geist text-black/50 font-semibold">
                          Status: In Progress
                        </span>
                        <button
                          onClick={onNavigateToDashboard}
                          className="text-xs font-black text-black hover:text-black flex items-center gap-1"
                        >
                          Open Workspace <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Simulated terminal feedback */}
                    {simOutput && (
                      <div className="bg-[#111827] text-white rounded-2xl p-4 font-geist text-xs flex items-center justify-between border border-black/10 animate-fadeIn">
                        <span className="text-[#E6FF55] font-bold">&gt; {simOutput}</span>
                        <button
                          onClick={() => setSimOutput(null)}
                          className="text-white/40 hover:text-white text-[10px] uppercase font-bold"
                        >
                          Dismiss
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab: My Courses */}
                {commandCenterTab === 'courses' && (
                  <div className="space-y-3">
                    {courses.slice(0, 2).map((c) => (
                      <div
                        key={c.id}
                        className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={c.imageUrl}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover border border-black/5"
                          />
                          <div>
                            <h5 className="font-hanken text-sm font-black text-[#111827]">
                              {c.title}
                            </h5>
                            <span className="font-geist text-xs text-black/50 font-bold">
                              {c.duration} · {c.level}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onSelectCourse(c)}
                          className="px-3.5 py-1.5 rounded-xl bg-[#F3F4F6] hover:bg-black hover:text-white text-xs font-black uppercase tracking-wider text-black transition-colors"
                        >
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab: Certifications */}
                {commandCenterTab === 'certifications' && (
                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm flex items-center justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mt-0.5">
                            <ShieldCheck className="w-5 h-5 text-[#E6FF55]" />
                          </div>
                          <div>
                            <h5 className="font-hanken text-sm font-black text-[#111827]">
                              {cert.title}
                            </h5>
                            <span className="font-geist text-xs text-black/40 block font-medium">
                              ID: {cert.credentialId}
                            </span>
                            <span className="font-geist text-[10px] text-black/60 font-mono">
                              Hash: {cert.verificationHash.substring(0, 16)}...
                            </span>
                          </div>
                        </div>
                        <span
                          className={`font-geist text-xs font-black uppercase px-3 py-1 rounded-full ${
                            cert.status === 'Verified'
                              ? 'bg-[#E6FF55] text-black'
                              : 'bg-[#F3F4F6] text-black/40'
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Command Center Bar */}
              <div className="pt-4 mt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-xs font-geist text-black/50 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Secure Enclave Sandbox Active (v2.4)</span>
                </div>
                <button
                  onClick={onNavigateToDashboard}
                  className="text-black hover:underline font-black flex items-center gap-1 cursor-pointer"
                >
                  <span>Enter Command Center</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
