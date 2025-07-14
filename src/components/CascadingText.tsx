"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface CascadingTextProps {
  text: string;
  className?: string;
}

const CascadingText: React.FC<CascadingTextProps> = ({ text, className }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={childVariants}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default CascadingText;
