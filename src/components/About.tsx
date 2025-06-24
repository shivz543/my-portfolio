'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPython, SiCplusplus, SiMysql, SiSqlite, SiFlask, SiTensorflow, SiPytorch,
  SiGit, SiGithub, SiR, SiFastapi, SiOpencv, SiVsco, SiReplit
} from 'react-icons/si';

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  }),
};

const About = () => {
  return (
    <motion.section id="about"
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
        <Section title=" Education" delay={0.1}>
          <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
            <li><b className="text-[#d6d4d8]">B.Tech. in Computer Science Engineering</b> – Mathematics and Computing <br />
            Netaji Subhas University of Technology, Delhi   &emsp; &emsp;  &emsp; &emsp; &emsp;   (2022–Present)</li>
            <li>Class 12 (CBSE) – 95.1%,&emsp;  AES NT Rama Rao Memorial Sr. Sec. School (2021)</li>
            <li>Class 10 (CBSE) – 98.8%,&emsp;  AES NT Rama Rao Memorial Sr. Sec. School (2019)</li>
          </ul> 
        </Section>

        {/* Skills */}
        <Section title=" Skills" delay={0.3}>
          <SkillGroup label="Languages" icons={[
            { icon: SiJavascript, color: "#f7df1e", name: "JavaScript" },
            { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
            { icon: SiPython, color: "#3776ab", name: "Python" },
            { icon: SiCplusplus, color: "#00599C", name: "C++" },
            { icon: SiR, color: "#276DC3", name: "R" },
          ]} />
          <SkillGroup label="Frameworks / Libraries" icons={[
            { icon: SiReact, color: "#61dafb", name: "React" },
            { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
            { icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind CSS" },
            { icon: SiNodedotjs, color: "#3c873a", name: "Node.js" },
            { icon: SiFlask, color: "#ffffff", name: "Flask" },
            { icon: SiFastapi, color: "#009688", name: "FastAPI" },
            { icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
            { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
            { icon: SiOpencv, color: "#5C3EE8", name: "OpenCV" },
          ]} />
          <SkillGroup label="Databases" icons={[
            { icon: SiMysql, color: "#00758f", name: "MySQL" },
            { icon: SiSqlite, color: "#003B57", name: "SQLite" },
          ]} />
          <SkillGroup label="Tools" icons={[
            { icon: SiGit, color: "#f34f29", name: "Git" },
            { icon: SiGithub, color: "#999999", name: "GitHub" },
            { icon: SiVsco, color: "#007ACC", name: "VS Code" },
            { icon: SiReplit, color: "#667881", name: "Replit" },
          ]} />
        </Section>

      </div>
    </motion.section>
  );
};

const Section = ({ title, children, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
  >
    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-[#9966FF]">{title}</h3>
    {children}
  </motion.div>
);

const SkillGroup = ({ label, icons }: any) => (
  <div className="mb-6">
    <p className="text-lg font-medium mb-2 text-white/80">{label}</p>
    <div className="flex flex-wrap gap-6">
      {icons.map(({ icon: Icon, color, name }: any, idx: number) => (
        <motion.div
          key={idx}
          custom={idx}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group text-4xl"
        >
          {/* Tooltip */}
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs px-2 py-1 rounded-md z-10 whitespace-nowrap">
            {name}
          </span>
          <Icon
            className="transition-transform duration-300 hover:scale-125 cursor-pointer"
            style={{ color }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default About;
