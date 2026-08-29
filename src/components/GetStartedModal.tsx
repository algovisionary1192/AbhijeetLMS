import React, { useState } from 'react';
import { Course } from '../types';
import {
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  initialCourse?: Course | null;
  onEnrollSuccess: (courseTitle: string, cohortDate: string) => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  courses,
  initialCourse,
  onEnrollSuccess
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    initialCourse?.id || courses[0]?.id || ''
  );
  const [selectedCohort, setSelectedCohort] = useState<string>('October 15, 2026');
  const [fullName, setFullName] = useState('Abhijeet Kumar');
  const [corporateEmail, setCorporateEmail] = useState('abhijeet.akmr.31@gmail.com');
  const [companyName, setCompanyName] = useState('Enterprise AI Ops');
  const [step, setStep] = useState<1 | 2>(1);

  if (!isOpen) return null;

  const currentCourse =
    courses.find((c) => c.id === selectedCourseId) || courses[0];

  const handleCompleteEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      onEnrollSuccess(currentCourse.title, selectedCohort);
    }, 1200);
  };

  return (
    <div
      id="get-started-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="get-started-modal-container"
        className="bg-white border border-black/5 rounded-[40px] max-w-2xl w-full p-8 md:p-10 shadow-2xl relative overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-[#F3F4F6] text-black hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <span className="inline-block px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-2">
                COHORT REGISTRATION
              </span>
              <h2 className="font-hanken text-3xl font-black text-[#111827]">
                Enroll in Abhijeet Academy
              </h2>
              <p className="font-inter text-xs text-black/60 mt-1 font-medium">
                Gain hands-on architectural mastery with sandboxed environments and verified credentials.
              </p>
            </div>

            <form onSubmit={handleCompleteEnrollment} className="space-y-5">
              {/* Select Course Track */}
              <div>
                <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-2">
                  1. Select Curriculum Track:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courses.map((course) => {
                    const isSelected = course.id === selectedCourseId;
                    return (
                      <div
                        key={course.id}
                        onClick={() => {
                          setSelectedCourseId(course.id);
                          if (course.cohortDates[0]) {
                            setSelectedCohort(course.cohortDates[0]);
                          }
                        }}
                        className={`p-4 rounded-[24px] border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-black text-white border-black shadow-md'
                            : 'bg-[#F9FAFB] border-black/10 hover:border-black/30 text-black'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span
                            className={`font-geist text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[#E6FF55] text-black font-mono'
                                : 'bg-black/5 text-black/70'
                            }`}
                          >
                            {course.category}
                          </span>
                          <span
                            className={`font-geist text-[10px] font-mono font-bold ${
                              isSelected ? 'text-white/60' : 'text-black/40'
                            }`}
                          >
                            {course.duration}
                          </span>
                        </div>
                        <h4 className="font-hanken text-xs font-black line-clamp-1">
                          {course.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Select Cohort */}
              <div>
                <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-2">
                  2. Select Cohort Schedule:
                </label>
                <div className="flex flex-wrap gap-2">
                  {(currentCourse?.cohortDates || [
                    'October 15, 2026',
                    'November 12, 2026'
                  ]).map((date) => (
                    <button
                      type="button"
                      key={date}
                      onClick={() => setSelectedCohort(date)}
                      className={`px-4 py-2 rounded-full text-xs font-geist font-black uppercase tracking-wider transition-all cursor-pointer ${
                        selectedCohort === date
                          ? 'bg-black text-white shadow-sm'
                          : 'bg-[#F3F4F6] text-black/70 hover:text-black hover:bg-black/10'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {date}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Attendee Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-1.5">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F3F4F6] border border-black/10 rounded-full px-4 py-2.5 text-xs text-black font-inter font-medium focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-1.5">
                    Corporate Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={corporateEmail}
                    onChange={(e) => setCorporateEmail(e.target.value)}
                    className="w-full bg-[#F3F4F6] border border-black/10 rounded-full px-4 py-2.5 text-xs text-black font-inter font-medium focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="p-4 bg-[#F9FAFB] border border-black/5 rounded-[24px] flex items-center justify-between text-xs font-geist">
                <div className="flex items-center gap-2 text-black font-bold">
                  <Shield className="w-4 h-4 text-black" />
                  <span className="text-[11px]">Includes Sandbox Container License</span>
                </div>
                <span className="text-black bg-[#E6FF55] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider font-mono">
                  Guaranteed Seat
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-[#E6FF55] hover:bg-[#E6FF55] hover:text-black py-4 rounded-full font-geist text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Confirm & Activate Command Center</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E6FF55] border-2 border-black flex items-center justify-center text-black mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-hanken text-3xl font-black text-[#111827]">
              Enrollment Confirmed
            </h3>
            <p className="font-inter text-sm text-black/70 max-w-md mx-auto font-medium leading-relaxed">
              Welcome, {fullName}. Your seat in <span className="font-black text-black">{currentCourse.title}</span> ({selectedCohort}) has been reserved. Transitioning to your Command Center...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
