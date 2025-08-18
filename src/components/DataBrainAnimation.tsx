'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiSave } from 'react-icons/fi';

const dataPoints = [...Array(6)].map((_, i) => {
  const angle = (i / 6) * 2 * Math.PI;
  return { x: Math.cos(angle) * 150, y: Math.sin(angle) * 150 };
});

const DataBrainAnimation = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dataBlockVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.5,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const informationBlockVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.0, // Wait for data blocks to merge
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center my-8 h-64 w-full"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {dataPoints.map((point, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-white rounded-md flex justify-center items-center text-black font-bold"
            style={{ x: point.x, y: point.y }}
            variants={dataBlockVariants}
          >
            Datos
          </motion.div>
        ))}

        <motion.div
          className="flex flex-col items-center text-white font-bold text-5xl"
          variants={informationBlockVariants}
        >
          <FiSave className="text-9xl mb-4" />
          <span>Información</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DataBrainAnimation;
