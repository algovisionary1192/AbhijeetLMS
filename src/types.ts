export type NavigationTab = 'academy' | 'portfolio' | 'case-studies' | 'dashboard';

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  isCompleted?: boolean;
}

export interface Course {
  id: string;
  title: string;
  category: 'AI OPS' | 'AUTOMATION' | 'STRATEGY' | 'AGENTIC AI' | 'DATA ENGINEERING';
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Executive';
  levelBars: number; // 1, 2, or 3
  duration: string;
  description: string;
  fullOverview: string;
  imageUrl: string;
  imageAlt: string;
  prerequisites: string[];
  cohortDates: string[];
  modulesCount: number;
  featured?: boolean;
  syllabus: CourseModule[];
  capstoneTitle: string;
  capstoneDescription: string;
}

export interface UserObjective {
  id: string;
  title: string;
  courseTitle: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  dueDate: string;
}

export interface Certification {
  id: string;
  title: string;
  recipientName: string;
  issueDate: string;
  credentialId: string;
  verificationHash: string;
  courseId: string;
  skills: string[];
  status: 'Verified' | 'Pending Audit';
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  architectureSummary: string;
  techStack: string[];
  outcomes: string[];
}
