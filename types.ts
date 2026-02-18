
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'data';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
