import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = ['projects', 'learn', 'contact'];

function Header() {
  return (
    <header
      className="w-full sticky top-0 z-50
      bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb]
      bg-[length:200%_200%] animate-gradientX
      text-white shadow-xl backdrop-blur-md bg-opacity-80
      animate-fadeDown"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 animate-fadeInLeft">
          <img
            src="/namelogo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-md hover:scale-105 transition duration-300"
          />
          <h1 className="text-2xl font-bold tracking-wide">Amrit</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-10 text-lg font-medium">
          {navItems.map((item, i) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) => `
                capitalize relative group hover:text-yellow-300 transition duration-200 
                ${isActive ? 'text-yellow-300' : ''} 
                animate-fadeInUp focus:outline-none bg-transparent active:bg-transparent
              `}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 transition-all duration-300 
                  ${({ isActive }) => isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Socials */}
        <div
          className="flex gap-4 items-center animate-fadeInRight"
          style={{ animationDelay: '0.25s' }}
        >
          <a href="https://x.com/Amrit24984888" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="/img.jpg" alt="X" className="w-8 h-8 rounded-full shadow-md" />
          </a>
          <a href="https://github.com/amrit7-glitch" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="/github-sign.png" alt="GitHub" className="w-8 h-8 rounded-full shadow-md" />
          </a>
          <a href="https://www.linkedin.com/in/amrit-raj-57a579323/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 rounded-full shadow-md" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
