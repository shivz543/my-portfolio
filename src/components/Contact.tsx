'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 overflow-hidden py-24 px-6 md:px-24 bg-black text-white"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15 z-0" />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-[#9966FF] drop-shadow-[0_0_8px_rgba(153,102,255,0.7)]"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gray-950/70 backdrop-blur-md border border-[#9966FF]/40 rounded-3xl p-10 shadow-2xl shadow-[#9966FF]/20 text-center space-y-8 relative z-10"
      >
        <p className="text-2xl leading-relaxed text-white/90 font-light">
          I'm open to exciting opportunities, meaningful collaborations, or just a friendly chat!
        </p>

        <div className="flex justify-center items-center gap-10 mt-10">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            href="mailto:shivangip.03r@gmail.com"
            className="text-[#9966FF] transform hover:scale-125 transition-all duration-300 ease-in-out
                       drop-shadow-[0_0_5px_rgba(153,102,255,0.5)] hover:drop-shadow-[0_0_10px_rgba(153,102,255,0.9)]"
          >
            <Mail size={48} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            href="https://linkedin.com/in/shivangi-prasad-31683324a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9966FF] transform hover:scale-125 transition-all duration-300 ease-in-out
                       drop-shadow-[0_0_5px_rgba(153,102,255,0.5)] hover:drop-shadow-[0_0_10px_rgba(153,102,255,0.9)]"
          >
            <Linkedin size={48} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            href="https://github.com/shivz543"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9966FF] transform hover:scale-125 transition-all duration-300 ease-in-out
                       drop-shadow-[0_0_5px_rgba(153,102,255,0.5)] hover:drop-shadow-[0_0_10px_rgba(153,102,255,0.9)]"
          >
            <Github size={48} />
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;