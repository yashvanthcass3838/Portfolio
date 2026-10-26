export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  domain: string;
  status: 'In Development' | 'Concept & Research' | 'Experimentation' | 'Prototype';
  statusColor?: string;
  description: string;
  problemStatement?: string;
  solutionOverview?: string;
  hardwareStack?: string[];
  softwareStack: string[];
  features?: string[];
  currentMilestone?: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  accentColor?: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  description?: string;
  iconName?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  shortDescription: string;
  icon: string;
  accent: 'cyan' | 'violet' | 'emerald' | 'amber';
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  roleOrStatus: 'Winner' | 'Participated' | 'Finalist';
  description: string;
  yearOrNote: string;
  domain: string;
  highlight?: boolean;
  certificateAvailable?: boolean;
}

export interface InternshipTraining {
  id: string;
  type: 'Internship' | 'Industrial Training' | 'Technical Workshop';
  organization: string;
  title: string;
  period: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  skillsGained: string[];
  verificationNote: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  department: string;
  currentYear: string;
  cgpa: string;
  expectedGraduation: string;
  location: string;
  courseworkHighlights: string[];
}

export interface ProfileInfo {
  name: string;
  label: string;
  headline: string;
  subtitle: string;
  bio: string;
  detailedBio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  statusText: string;
}
