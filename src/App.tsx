import React, { useState, useEffect } from 'react';
import { NavigationTab, Course, UserObjective, Certification } from './types';
import { COURSES_DATA, INITIAL_OBJECTIVES, CERTIFICATIONS_DATA } from './data/academyData';
import { TopNavBar } from './components/TopNavBar';
import { AcademyHome } from './components/AcademyHome';
import { DashboardScreen } from './components/DashboardScreen';
import { PortfolioScreen } from './components/PortfolioScreen';
import { CaseStudiesScreen } from './components/CaseStudiesScreen';
import { SyllabusModal } from './components/SyllabusModal';
import { FullCatalogModal } from './components/FullCatalogModal';
import { AuthModal } from './components/AuthModal';
import { GetStartedModal } from './components/GetStartedModal';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('academy');
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [objectives, setObjectives] = useState<UserObjective[]>(INITIAL_OBJECTIVES);
  const [certifications, setCertifications] = useState<Certification[]>(CERTIFICATIONS_DATA);

  // Modals
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);
  const [enrollTargetCourse, setEnrollTargetCourse] = useState<Course | null>(null);
  const [selectedCertForView, setSelectedCertForView] = useState<Certification | null>(null);

  // Auth / Role State
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState('Pro Access');

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleUpdateObjectiveProgress = (id: string, newProgress: number) => {
    setObjectives((prev) =>
      prev.map((obj) => {
        if (obj.id === id) {
          const isDone = newProgress >= 100;
          return {
            ...obj,
            progress: newProgress,
            status: isDone ? 'Completed' : 'In Progress'
          };
        }
        return obj;
      })
    );
    showToast(`Objective progress updated to ${newProgress}%`);
  };

  const handleEnrollFromSyllabus = (course: Course, cohortDate: string) => {
    setSelectedCourseForSyllabus(null);
    setEnrollTargetCourse(course);
    setGetStartedModalOpen(true);
  };

  const handleEnrollSuccess = (courseTitle: string, cohortDate: string) => {
    setGetStartedModalOpen(false);
    showToast(`Enrolled in ${courseTitle} (${cohortDate})!`);
    // Add objective to dashboard
    const newObjective: UserObjective = {
      id: `obj-${Date.now()}`,
      title: `Module 1: Foundations & Architecture`,
      courseTitle: courseTitle,
      progress: 0,
      status: 'In Progress',
      dueDate: `Cohort starting ${cohortDate}`
    };
    setObjectives((prev) => [newObjective, ...prev]);
    setActiveTab('dashboard');
  };

  const handleLoginSuccess = (role: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    showToast(`Signed in as ${role}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('Guest');
    showToast('Signed out of Command Center');
  };

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827] flex flex-col font-sans selection:bg-[#E6FF55] selection:text-black">
      {/* Top Fixed Header */}
      <TopNavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLogin={() => setAuthModalOpen(true)}
        onOpenGetStarted={() => {
          setEnrollTargetCourse(courses[0]);
          setGetStartedModalOpen(true);
        }}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogout={handleLogout}
      />

      {/* Main Content View with top padding for fixed header */}
      <main className="flex-1 pt-[88px] pb-16">
        {activeTab === 'academy' && (
          <AcademyHome
            courses={courses}
            objectives={objectives}
            certifications={certifications}
            onSelectCourse={(course) => setSelectedCourseForSyllabus(course)}
            onViewAllModules={() => setCatalogModalOpen(true)}
            onOpenGetStarted={() => {
              setEnrollTargetCourse(courses[0]);
              setGetStartedModalOpen(true);
            }}
            onNavigateToDashboard={() => setActiveTab('dashboard')}
            onUpdateObjectiveProgress={handleUpdateObjectiveProgress}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardScreen
            courses={courses}
            objectives={objectives}
            certifications={certifications}
            onSelectCourse={(course) => setSelectedCourseForSyllabus(course)}
            onUpdateObjectiveProgress={handleUpdateObjectiveProgress}
            onOpenGetStarted={() => {
              setEnrollTargetCourse(courses[0]);
              setGetStartedModalOpen(true);
            }}
            onViewCertificate={(cert) => setSelectedCertForView(cert)}
            userRole={userRole}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioScreen
            onOpenGetStarted={() => {
              setEnrollTargetCourse(courses[0]);
              setGetStartedModalOpen(true);
            }}
            onNavigateToCaseStudies={() => setActiveTab('case-studies')}
          />
        )}

        {activeTab === 'case-studies' && (
          <CaseStudiesScreen
            onOpenGetStarted={() => {
              setEnrollTargetCourse(courses[0]);
              setGetStartedModalOpen(true);
            }}
            onSelectCourseById={(courseId) => {
              const target = courses.find((c) => c.id === courseId) || courses[0];
              setSelectedCourseForSyllabus(target);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Syllabus Modal */}
      {selectedCourseForSyllabus && (
        <SyllabusModal
          course={selectedCourseForSyllabus}
          onClose={() => setSelectedCourseForSyllabus(null)}
          onEnroll={handleEnrollFromSyllabus}
        />
      )}

      {/* Full Catalog Modal */}
      <FullCatalogModal
        courses={courses}
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        onSelectCourse={(course) => {
          setSelectedCourseForSyllabus(course);
        }}
      />

      {/* Auth Login Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLogin={handleLoginSuccess}
      />

      {/* Get Started / Enrollment Modal */}
      <GetStartedModal
        isOpen={getStartedModalOpen}
        onClose={() => setGetStartedModalOpen(false)}
        courses={courses}
        initialCourse={enrollTargetCourse}
        onEnrollSuccess={handleEnrollSuccess}
      />

      {/* Verified Certificate Modal */}
      <CertificateModal
        cert={selectedCertForView}
        isOpen={!!selectedCertForView}
        onClose={() => setSelectedCertForView(null)}
      />

      {/* Global Notification Toast */}
      {toastMessage && (
        <div
          id="global-toast"
          className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white px-5 py-3.5 rounded-[24px] shadow-2xl border border-black/10 flex items-center gap-3 animate-fadeIn"
        >
          <div className="w-6 h-6 rounded-full bg-[#E6FF55] text-black flex items-center justify-center font-bold text-xs">
            ✓
          </div>
          <span className="font-geist text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
