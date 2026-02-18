
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Inicio', id: Section.HERO },
    { label: 'Sobre mí', id: Section.ABOUT },
    { label: 'Experiencia', id: Section.EXPERIENCE },
    { label: 'Skills', id: Section.SKILLS },
    { label: 'Proyectos', id: Section.PROJECTS },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <div className="glass w-full max-w-[95vw] md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center shadow-2xl border border-white/10 overflow-hidden">
        
        {/* Logo - Solo visible desde sm en adelante para ahorrar espacio */}
        <div className="text-sm md:text-xl font-bold gradient-text cursor-default hidden md:block mr-6 flex-shrink-0">
          JULIAN.DEV
        </div>

        {/* Contenedor de links con scroll horizontal táctil */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar flex-1 justify-between md:justify-start items-center">
          <div className="flex gap-4 md:gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] md:text-sm font-medium transition-colors hover:text-blue-400 whitespace-nowrap ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botón de contacto - Se ajusta según el tamaño de pantalla */}
          <a
            href={`#${Section.CONTACT}`}
            className={`bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-5 py-1.5 rounded-full text-[11px] md:text-sm font-medium transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap ml-4 flex-shrink-0 ${
              activeSection === Section.CONTACT ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900' : ''
            }`}
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
