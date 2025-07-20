import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-background py-4 px-8 flex justify-between items-center">
      <Logo />
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#services" className="text-text-secondary hover:text-accent">Servicios</a></li>
          <li><a href="#contact" className="text-text-secondary hover:text-accent">Contacto</a></li>
          <li><Link href="/blog" className="text-text-secondary hover:text-accent">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
