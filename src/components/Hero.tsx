'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from '@/../public/animations/ani.json';
import ParticlesBackground from './ParticlesBackground';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdOutlineSend } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center px-6 md:px-24 text-white overflow-hidden">
      <ParticlesBackground />
      <motion.div id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#0A051E] via-[#100C2F] to-[#2B1A4B] z-0"
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-base tracking-widest uppercase text-white/70 mb-4"
        >
          Hi, I’m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-[#9966FF]">Shivangi Prasad</span> 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
          className="text-xl md:text-2xl max-w-xl text-white/90"
        >
          A tech enthusiast exploring Data Structures, Web Development and Machine learning crafting modern, real-life problem solutions with a focus on user experience.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-10 w-[300px] md:w-[400px]"
      >
        <Lottie animationData={devAnimation} loop={true} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 z-10 flex space-x-6"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#9966FF] transition-colors duration-200"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#9966FF] transition-colors duration-200"
        >
          <FaTwitter className="text-3xl" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#9966FF] transition-colors duration-200"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;