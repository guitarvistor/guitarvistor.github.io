import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-4 px-8 text-center text-text-secondary">
      <p>&copy; {new Date().getFullYear()} Silcon. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
