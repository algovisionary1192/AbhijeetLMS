import React, { useState } from 'react';
import { Course } from '../types';
import {
  X,
  Clock,
  Signal,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course, cohortDate: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(
    course?.syllabus[0]?.id || null
  );
  const [selectedCohort, setSelectedCohort] = useState<string>(
    course?.cohortDates[0] || ''
  );

  if (!course) return null;

  const toggleModule = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <div
      id="syllabus-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="syllabus-modal-container"
        className="bg-white border border-black/5 rounded-[40px] max-w-4xl w-full my-8 max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 sm:h-64 w-full bg-black shrink-0 overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Close button */}
          <button
            id="close-syllabus-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-all cursor-pointer backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and metadata on banner */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#E6FF55] text-black px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider font-mono">
                  {course.category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Signal className="w-3 h-3 text-[#E6FF55]" /> {course.level}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#E6FF55]" /> {course.duration}
                </span>
              </div>
              <h2 className="font-hanken text-2xl sm:text-4xl font-black text-white">
                {course.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-8 md:p-10 overflow-y-auto space-y-8 bg-[#F3F4F6]">
          {/* Overview */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-black/5 shadow-sm">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-wider mb-3">
              EXECUTIVE OVERVIEW
            </span>
            <p className="font-inter text-sm text-black/70 leading-relaxed font-medium">
              {course.fullOverview}
            </p>
          </div>

          {/* Syllabus Modules Accordion */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-black/5 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                CURRICULUM ({course.syllabus.length} MODULES)
              </span>
              <span className="font-geist text-xs font-black uppercase tracking-wider text-black/50 font-mono">
                {course.duration} INTENSIVE
              </span>
            </div>

            <div className="space-y-3">
              {course.syllabus.map((mod, index) => {
                const isExpanded = expandedModuleId === mod.id;
                return (
                  <div
                    key={mod.id}
                    className={`border rounded-[24px] transition-all overflow-hidden ${
                      isExpanded
                        ? 'border-black bg-[#F9FAFB]'
                        : 'border-black/10 bg-white hover:border-black/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full p-4 md:p-5 flex items-center justify-between text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-geist text-xs font-black text-black w-8 h-8 rounded-full bg-[#E6FF55] flex items-center justify-center font-mono shrink-0">
                          0{index + 1}
                        </span>
                        <div>
                          <h4 className="font-hanken text-base font-black text-[#111827]">
                            {mod.title}
                          </h4>
                          <span className="font-geist text-[10px] font-bold uppercase tracking-wider text-black/40 font-mono">
                            {mod.duration}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-black" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-black/40" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-black/5 space-y-3">
                        <p className="font-inter text-xs text-black/70 font-medium leading-relaxed">
                          {mod.description}
                        </p>
                        <div className="space-y-2 pt-2">
                          <span className="font-geist text-[10px] text-black font-black uppercase tracking-wider block">
                            Key Architectural Deliverables:
                          </span>
                          <ul className="space-y-1.5 pl-1">
                            {mod.topics.map((t, tidx) => (
                              <li
                                key={tidx}
                                className="font-inter text-xs text-black/80 font-medium flex items-center gap-2"
                              >
                                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Capstone Benchmark Project */}
          <div className="bg-black text-white rounded-[32px] p-6 md:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#E6FF55] text-black px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider font-mono">
                HANDS-ON CAPSTONE
              </span>
            </div>
            <h4 className="font-hanken text-xl font-black text-white mb-2">
              {course.capstoneTitle}
            </h4>
            <p className="font-inter text-xs text-white/70 leading-relaxed font-medium">
              {course.capstoneDescription}
            </p>
          </div>

          {/* Prerequisites */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-black/5 shadow-sm">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-wider mb-4">
              TARGET PROFILE & PREREQUISITES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.prerequisites.map((req, ridx) => (
                <div
                  key={ridx}
                  className="bg-[#F3F4F6] rounded-[20px] p-3.5 text-xs font-inter text-black/80 font-medium flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="p-6 md:px-10 border-t border-black/5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="w-full sm:w-auto">
            <label className="font-geist text-[10px] font-black uppercase tracking-wider text-black/50 block mb-1.5">
              Select Starting Cohort:
            </label>
            <div className="flex gap-2">
              {course.cohortDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedCohort(date)}
                  className={`px-4 py-2 rounded-full text-xs font-geist font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCohort === date
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-[#F3F4F6] text-black/70 hover:text-black hover:bg-black/10'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full border border-black/10 text-xs font-geist font-black uppercase tracking-wider text-black hover:bg-[#F3F4F6] transition-colors w-full sm:w-auto cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onEnroll(course, selectedCohort)}
              className="px-8 py-3 rounded-full bg-black text-[#E6FF55] hover:bg-[#E6FF55] hover:text-black font-geist text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer shadow-sm"
            >
              <span>Enroll In Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
