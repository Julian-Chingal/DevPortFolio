
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Inicio', id: Section.HERO },
    { label: 'Sobre mí', id: Section.ABOUT },
    { label: 'Habilidades', id: Section.SKILLS },
    { label: 'Proyectos', id: Section.PROJECTS },
    { label: 'Contacto', id: Section.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-6 py-3 rounded-full flex gap-8 items-center shadow-2xl">
        <div className="text-xl font-bold gradient-text cursor-default">JULIAN.DEV</div>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`#${Section.CONTACT}`}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95"
        >
          Contactar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
