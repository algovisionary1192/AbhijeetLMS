import React, { useState } from 'react';
import { Course } from '../types';
import {
  X,
  Search,
  Filter,
  Signal,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface FullCatalogModalProps {
  courses: Course[];
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const FullCatalogModal: React.FC<FullCatalogModalProps> = ({
  courses,
  isOpen,
  onClose,
  onSelectCourse
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['ALL', 'AI OPS', 'AUTOMATION', 'STRATEGY', 'AGENTIC AI'];
  const levels = ['ALL', 'Foundation', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory =
      selectedCategory === 'ALL' || c.category === selectedCategory;
    const matchesLevel =
      selectedLevel === 'ALL' || c.level === selectedLevel;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div
      id="catalog-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="catalog-modal-container"
        className="bg-white border border-black/5 rounded-[40px] max-w-6xl w-full my-8 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3.5 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                CURRICULUM CATALOG
              </span>
              <span className="inline-block px-3 py-1 bg-[#E6FF55] text-black text-[10px] font-black rounded-full uppercase tracking-wider font-mono">
                {courses.length} MODULES
              </span>
            </div>
            <h2 className="font-hanken text-3xl font-black text-[#111827]">
              Executive AI & Automation Modules
            </h2>
          </div>

          <button
            onClick={onClose}
            className="self-end sm:self-center p-3 rounded-full bg-[#F3F4F6] text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 md:px-10 border-b border-black/5 bg-[#F9FAFB] flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, architecture, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors font-inter font-medium shadow-sm"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-geist font-black uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white border border-black/10 text-black/60 hover:text-black hover:bg-[#F3F4F6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Content */}
        <div className="p-8 md:p-10 overflow-y-auto flex-1 bg-[#F3F4F6]">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 text-black/50">
              <p className="font-inter text-base mb-2 font-medium">No courses match the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSelectedLevel('ALL');
                  setSearchQuery('');
                }}
                className="text-xs font-geist font-black uppercase tracking-wider text-black underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="bg-white border border-black/5 rounded-[36px] overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-3"
                >
                  <div>
                    <div className="relative h-44 w-full rounded-[28px] overflow-hidden bg-black/5 mb-4">
                      <img
                        src={course.imageUrl}
                        alt={course.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full font-geist text-[10px] font-black uppercase tracking-wider">
                        {course.category}
                      </div>
                    </div>

                    <div className="px-3 pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-geist text-[10px] text-black/50 font-bold flex items-center gap-1 uppercase tracking-wider">
                          <Signal className="w-3 h-3 text-black" />
                          {course.level}
                        </span>
                        <span className="font-geist text-[10px] text-black/50 font-bold flex items-center gap-1 uppercase tracking-wider">
                          <Clock className="w-3 h-3 text-black" />
                          {course.duration}
                        </span>
                      </div>

                      <h3 className="font-hanken text-lg font-black text-[#111827] mb-2 leading-snug">
                        {course.title}
                      </h3>

                      <p className="font-inter text-xs text-black/60 mb-4 line-clamp-2 leading-relaxed font-medium">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 pb-2 pt-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCourse(course);
                      }}
                      className="w-full py-3 bg-[#F3F4F6] hover:bg-black hover:text-white rounded-full font-geist text-xs text-black transition-all flex justify-between items-center px-5 tracking-wider uppercase font-black cursor-pointer group/btn"
                    >
                      <span>VIEW SYLLABUS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
