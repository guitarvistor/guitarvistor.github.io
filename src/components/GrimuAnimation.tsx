
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi'; // Added import
import Image from 'next/image';

const GrimuAnimation = () => {
  // Animation state machine: 'initial' -> 'visible' -> 'integrating' -> 'finished'
  const [animationState, setAnimationState] = useState('initial');

  const sources = [
    { name: 'Ventas', color: 'bg-green-500' },
    { name: 'Compras', color: 'bg-blue-500' },
    { name: 'Proveedores', color: 'bg-yellow-500' },
    { name: 'Clientes', color: 'bg-purple-500' },
    { name: 'Salarios', color: 'bg-red-500' },
    { name: 'Publicidad', color: 'bg-indigo-500' },
  ];

  useEffect(() => {
    if (animationState === 'initial') {
      // After a short delay, start the 'visible' animation
      const visibleTimer = setTimeout(() => setAnimationState('visible'), 200);
      return () => clearTimeout(visibleTimer);
    }
    if (animationState === 'visible') {
      // After all bubbles are visible, start 'integrating'
      const integrationTimer = setTimeout(() => setAnimationState('integrating'), 3000);
      return () => clearTimeout(integrationTimer);
    }
    if (animationState === 'integrating') {
        // After integration, move to 'finished' state for the report
        const finishedTimer = setTimeout(() => setAnimationState('finished'), 2000);
        return () => clearTimeout(finishedTimer);
    }
  }, [animationState]);

  const radius = 150;

  return (
    <div className="relative w-96 h-96 flex items-center justify-center my-8">
      <motion.div
        className="absolute w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-gray-500 z-10"
        animate={{
          scale: animationState === 'integrating' ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/logo_grimu.png" alt="Grimu Logo" width={120} height={120} />
      </motion.div>

      {sources.map((source, index) => {
        const angle = (index / sources.length) * 2 * Math.PI;
        const initialX = radius * Math.cos(angle);
        const initialY = radius * Math.sin(angle);

        return (
          <motion.div
            key={source.name}
            className={`absolute w-24 h-16 rounded-lg ${source.color} flex items-center justify-center text-white font-bold shadow-lg`}
            initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.5 }}
            animate={{
              opacity: animationState === 'visible' ? 1 : 0,
              scale: animationState === 'visible' ? 1 : 0,
              x: animationState === 'integrating' ? 0 : initialX,
              y: animationState === 'integrating' ? 0 : initialY,
            }}
            transition={{
              duration: 0.8,
              delay: animationState === 'visible' ? index * 0.2 : 0,
            }}
          >
            {source.name}
          </motion.div>
        );
      })}

      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0.5, x: 0 }}
        animate={{
            opacity: animationState === 'finished' ? 1 : 0,
            scale: animationState === 'finished' ? 1 : 0.5,
            x: animationState === 'finished' ? 160 : 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-20 h-20 bg-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-800 font-bold shadow-lg text-center p-2">
          <FiFileText className="text-8xl mb-1" />
          <span>Informe</span>
        </div>
      </motion.div>
    </div>
  );
};

export default GrimuAnimation;
