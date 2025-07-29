"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface CascadingTextProps {
  text: string;
  className?: string;
}

const CascadingText: React.FC<CascadingTextProps> = ({ text, className }) => {
  const words = text.split(' ');

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  let i = 0;

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex' }}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} custom={i++} variants={variants}>
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <motion.span custom={i++} variants={variants}>
              {/* Using a non-breaking space */}
              {'\u00A0'}
            </motion.span>
          )}
        </span>
      ))}
    </motion.h1>
  );
};

export default CascadingText;
