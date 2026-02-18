
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether Cloud Dashboard',
    description: 'A real-time cloud infrastructure monitoring tool built with NestJS and TypeScript.',
    tech: ['NestJS', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/aether/800/600'
  },
  {
    id: '2',
    title: 'Nebula Commerce',
    description: 'High-performance content-driven e-commerce site optimized with Astro.',
    tech: ['Astro', 'TypeScript', 'Tailwind', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/nebula/800/600'
  },
  {
    id: '3',
    title: 'FastAPI Data Engine',
    description: 'Custom microservice for high-speed data processing and AI integration.',
    tech: ['FastAPI', 'Python', 'Docker', 'Gemini API'],
    imageUrl: 'https://picsum.photos/seed/synth/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'NestJS', level: 90, category: 'backend' },
  { name: 'FastAPI', level: 85, category: 'backend' },
  { name: 'TypeScript', level: 92, category: 'frontend' },
  { name: 'Astro', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'PostgreSQL', level: 85, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Git', level: 95, category: 'tools' }
];
