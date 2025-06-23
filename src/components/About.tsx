'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiGithub,
  SiGit,
} from 'react-icons/si';

// Animation variant for icons
const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// IconWrapper avoids TypeScript error during build
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={iconVariants}>
    {children}
  </motion.div>
);

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 overflow-hidden py-20 px-6 md:px-24 bg-gradient-to-b from-[#100C2F] to-[#0A051E] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#9966FF]"
      >
        About Me
      </motion.h2>

      <div className="space-y-10 max-w-4xl mx-auto z-10 relative">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            🎓 Education
          </h3>
          <p className="text-lg leading-relaxed text-white/90">
            I am currently pursuing a B.Tech in Mathematics and Computing at{' '}
            <span className="font-semibold text-[#9966FF]">
              Netaji Subhas University of Technology (NSUT)
            </span>
            . I enjoy learning and applying math in real-world tech domains like
            data science, AI, and software development.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-cyan-400">
            🛠 Skills
          </h3>

          <div className="space-y-8">
            {/* Languages */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-lg font-medium mb-3 text-white/80">Languages</p>
              <div className="flex flex-wrap gap-6 text-4xl">
                <IconWrapper>
                  <SiJavascript title="JavaScript" className="text-yellow-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiTypescript title="TypeScript" className="text-blue-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiPython title="Python" className="text-yellow-300 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiCplusplus title="C++" className="text-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-lg font-medium mb-3 text-white/80">Frameworks & Libraries</p>
              <div className="flex flex-wrap gap-6 text-4xl">
                <IconWrapper>
                  <SiReact title="React" className="text-cyan-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiNextdotjs title="Next.js" className="text-black dark:text-white hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiTailwindcss title="Tailwind CSS" className="text-sky-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiNodedotjs title="Node.js" className="text-green-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-lg font-medium mb-3 text-white/80">Tools</p>
              <div className="flex flex-wrap gap-6 text-4xl">
                <IconWrapper>
                  <SiGit title="Git" className="text-orange-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
                <IconWrapper>
                  <SiGithub title="GitHub" className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </IconWrapper>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
