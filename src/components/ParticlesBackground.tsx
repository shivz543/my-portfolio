'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from '@tsparticles/engine';
import type { Engine } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          color: { value: '#ffffff' },
          links: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.5,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
