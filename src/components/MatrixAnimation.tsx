"use client";

import { useRef } from 'react';

const MatrixAnimation = ({ onFinished }: { onFinished: () => void }) => {
  const animationRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={animationRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 9999,
        opacity: 0,
        color: '#0f0',
        fontFamily: 'monospace',
        overflow: 'hidden',
      }}
    />
  );
};

export default MatrixAnimation;