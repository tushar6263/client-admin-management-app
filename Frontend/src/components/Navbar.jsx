import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <img src="https://w7.pngwing.com/pngs/48/511/png-transparent-computer-icons-home-home-angle-text-logo-thumbnail.png" alt="Logo" className="h-8" />
        <span className="font-bold text-xl text-blue-900">Real Trust</span>
      </div>
      <ul className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
