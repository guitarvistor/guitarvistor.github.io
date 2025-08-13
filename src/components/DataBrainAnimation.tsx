'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DataBrainAnimation = () => {
  const repoVariants = {
    initial: (i: number) => ({
      opacity: 1,
      x: i % 2 === 0 ? -80 : 80,
      y: i < 2 ? -80 : 80,
    }),
    animate: {
      opacity: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative w-48 h-48 flex justify-center items-center">
        {/* Brain */}
        <motion.div
          className="w-24 h-24 bg-button-secondary rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        ></motion.div>

        {/* Data Repositories */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-white rounded-md"
            custom={i}
            variants={repoVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default DataBrainAnimation;