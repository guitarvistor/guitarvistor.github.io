'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background py-4 px-8 flex justify-between items-center">
      <Logo />
      <nav className="hidden md:flex space-x-8">
        <a href="#services" className="text-text-secondary hover:text-accent">Servicios</a>
        <a href="#contact" className="text-text-secondary hover:text-accent">Contacto</a>
        <Link href="/blog" className="text-text-secondary hover:text-accent">Blog</Link>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-secondary focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-background flex flex-col items-center md:hidden">
          <a href="#services" className="py-2 text-text-secondary hover:text-accent" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#contact" className="py-2 text-text-secondary hover:text-accent" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          <Link href="/blog" className="py-2 text-text-secondary hover:text-accent" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

