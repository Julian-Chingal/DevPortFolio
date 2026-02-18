
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import { Section, Project } from './types';
import { PROJECTS, SKILLS } from './constants';
import { generateProjectIdea } from './services/geminiService';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(Section.HERO);
  const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<{ title: string, description: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGenerateIdea = async () => {
    setIsGeneratingIdea(true);
    const idea = await generateProjectIdea(['NestJS', 'Astro', 'FastAPI', 'TypeScript']);
    setGeneratedIdea(idea);
    setIsGeneratingIdea(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Navbar activeSection={activeSection} />
      
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <main>
        {/* Hero Section */}
        <section id={Section.HERO} className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
          <div className="max-w-4xl text-center">
            <span className="font-mono text-blue-400 mb-4 block text-sm tracking-widest uppercase animate-pulse">Disponible para nuevos retos</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
              Ingeniería de <br />
              <span className="gradient-text">Sistemas</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Hola, soy <strong>Julian Mauricio Chingal</strong>. Construyo arquitecturas robustas con <strong>Node.js, NestJS y FastAPI</strong>, y creo interfaces modernas con <strong>Astro y TypeScript</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`#${Section.PROJECTS}`} className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:-translate-y-1">
                Ver Proyectos
              </a>
              <button onClick={handleGenerateIdea} className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                {isGeneratingIdea ? 'Pensando...' : 'Inspiración IA'}
                {!isGeneratingIdea && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.243 15.657l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM6.464 14.95l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414z" /></svg>}
              </button>
            </div>
            
            {generatedIdea && (
              <div className="mt-12 glass p-6 rounded-2xl border-blue-500/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-xs text-blue-400 font-mono uppercase mb-2 block">Idea Generada por IA</span>
                <h3 className="text-xl font-bold mb-2">{generatedIdea.title}</h3>
                <p className="text-gray-400 text-sm italic">"{generatedIdea.description}"</p>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section id={Section.ABOUT} className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              <img src="https://picsum.photos/seed/julian/600/800" alt="Julian Mauricio Chingal" className="relative rounded-2xl w-full h-[600px] object-cover border border-white/10" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Apasionado por la <br /><span className="text-blue-500">arquitectura de software.</span></h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  Soy Ingeniero de Sistemas y actualmente <strong>estudiante de especialización</strong>, enfocado en elevar los estándares de calidad en el desarrollo de aplicaciones.
                </p>
                <p>
                  Mi enfoque principal es el ecosistema de <strong>Node.js</strong> y <strong>TypeScript</strong>, utilizando frameworks modernos como <strong>NestJS</strong> para el backend y <strong>Astro</strong> para el frontend, garantizando rendimiento y escalabilidad.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">Especialista</div>
                    <div className="text-sm">En Formación</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">Backend</div>
                    <div className="text-sm">Node/Nest/FastAPI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id={Section.SKILLS} className="py-32 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Dominio Técnico</h2>
              <p className="text-gray-400">Las herramientas y tecnologías con las que doy vida a mis proyectos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(['frontend', 'backend', 'tools'] as const).map(cat => (
                <div key={cat} className="glass p-8 rounded-3xl border-white/5">
                  <h3 className="text-xl font-bold mb-6 capitalize text-blue-400">{cat === 'frontend' ? 'Frontend' : cat === 'backend' ? 'Backend' : 'Herramientas'}</h3>
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === cat).map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id={Section.PROJECTS} className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Trabajos Seleccionados</h2>
                <p className="text-gray-400">Una muestra de proyectos que definen mi trayectoria técnica.</p>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                Ver todos los proyectos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {PROJECTS.map((project, idx) => (
                <div key={project.id} className={`group cursor-pointer ${idx % 2 === 1 ? 'md:mt-24' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex gap-4">
                        <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Estudio de Caso</span>
                        <span className="glass px-4 py-2 rounded-full text-xs font-bold">Demo En Vivo</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id={Section.CONTACT} className="py-32 px-6">
          <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/5 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para empezar un proyecto?</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
              Estoy abierto a nuevas oportunidades y colaboraciones técnicas. Hablemos sobre cómo puedo aportar a tu equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:j.mauricio@example.dev" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-900/20">
                j.mauricio@example.dev
              </a>
              <div className="flex gap-6">
                {['LinkedIn', 'GitHub'].map(social => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 Julian Mauricio Chingal. Ingeniero de Sistemas.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
