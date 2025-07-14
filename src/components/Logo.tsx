import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="relative group">
      <Image src="/silcon1.png" alt="Silcon Logo" width={180} height={40} />
      <div className="absolute top-0 left-0 w-full h-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
    </Link>
  );
};

export default Logo;
