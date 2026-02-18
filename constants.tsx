
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ecosistema NestJS & BI',
    description: 'Arquitectura backend escalable con integración de dashboards analíticos para la toma de decisiones.',
    tech: ['NestJS', 'TypeScript', 'Power BI', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Automatización de Procesos',
    description: 'Flujos de trabajo optimizados con Power Automate integrando APIs de FastAPI y servicios en la nube.',
    tech: ['FastAPI', 'Power Automate', 'Python', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Portal Moderno Astro',
    description: 'Interfaz de alto rendimiento con arquitectura de islas enfocada en SEO y experiencia de usuario.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js / NestJS', level: 95, category: 'backend' },
  { name: 'FastAPI / Python', level: 88, category: 'backend' },
  { name: 'TypeScript', level: 92, category: 'backend' },
  { name: 'Astro', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Power BI', level: 85, category: 'data' },
  { name: 'Power Automate', level: 90, category: 'data' },
  { name: 'Analítica de Datos', level: 80, category: 'data' },
  { name: 'Docker', level: 82, category: 'tools' },
  { name: 'PostgreSQL / SQL', level: 90, category: 'tools' },
  { name: 'Git / Scrum', level: 95, category: 'tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Ingeniero de Sistemas / Desarrollador Senior',
    company: 'Proyectos Independientes & Consultoría',
    period: '2022 - Presente',
    description: 'Liderazgo técnico en el desarrollo de aplicaciones web de alto rendimiento y automatización de flujos empresariales.'
  },
  {
    role: 'Especialista en Datos y Backend',
    company: 'Empresa de Tecnología',
    period: '2020 - 2022',
    description: 'Implementación de arquitecturas basadas en microservicios y creación de dashboards de inteligencia de negocios.'
  },
  {
    role: 'Analista de Sistemas',
    company: 'Sector Corporativo',
    period: '2018 - 2020',
    description: 'Gestión de bases de datos y soporte en la transformación digital de procesos manuales.'
  }
];
