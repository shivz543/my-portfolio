'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
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
  SiMysql,       // Added MySQL icon (can represent SQL)
  SiR,           // Added R icon
  SiFlask,       // Added Flask icon
  SiTensorflow,  // Added TensorFlow icon
  SiPytorch,     // Added PyTorch icon
  SiSqlite,      // Added SQLite icon
  SiVsco, // Added VS Code icon
  SiReplit,      // Added Replit icon
} from 'react-icons/si';

// Animation variant for icons
const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

// IconWrapper avoids TypeScript error during build
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div>
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
          <ul className="list-disc list-inside mt-4 text-white/80 space-y-1">
            <li>B.Tech. in Computer Science Engineering, Specialization in Mathematics and Computing - Netaji Subhas University of Technology, Delhi (July 2022 - Present)</li>
            <li>Class 12 (CBSE), 2021 - 95.1% - AES NT Rama Rao Memorial Sr. Secondary School</li>
            <li>Class 10 (CBSE), 2019 - 98.8% - AES NT Rama Rao Memorial Sr. Secondary School</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            💼 Experience
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-white/90 space-y-3">
            <li>
              <span className="font-semibold text-[#9966FF]">WorldQuant Research Consultant</span>
              <p className="text-base text-white/80 mt-1">Currently engaged as a Research Consultant, contributing to advanced quantitative research initiatives. Leveraging analytical skills to explore complex financial datasets and develop innovative trading strategies.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Data Analyst Intern, Deluttr, Yehlo Solutions Pvt Ltd</span> (Dec 2024 - Mar 2025)
              <p className="text-base text-white/80 mt-1">Automated data pipelines using SQL and visualized metrics via Tableau dashboards. Collaborated with cross-functional teams to analyze user behavior and boost click-through rate by 20%.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Growth Associate Intern, Yehlo Solutions Pvt Ltd</span> (Dec 2023 - Aug 2024)
              <p className="text-base text-white/80 mt-1">Led A/B testing and funnel analysis to improve user conversions and ROAS. Built scalable reporting solutions and collaborated on campaign optimization with dev teams.</p>
            </li>
          </ul>
        </motion.div>


        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
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
                <motion.div variants={iconVariants}>
                  <SiJavascript title="JavaScript" className="text-yellow-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiTypescript title="TypeScript" className="text-blue-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiPython title="Python" className="text-yellow-300 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiCplusplus title="C++" className="text-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <span className="text-lg text-white/80 self-center" title="Java">Java</span>
                <motion.div variants={iconVariants}>
                  <SiMysql title="SQL / MySQL" className="text-blue-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiR title="R" className="text-blue-700 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
              </div>
            </motion.div>

            {/* Frameworks & Libraries */}
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
                <motion.div variants={iconVariants}>
                  <SiReact title="React" className="text-cyan-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiNextdotjs title="Next.js" className="text-black dark:text-white hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiTailwindcss title="Tailwind CSS" className="text-sky-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiNodedotjs title="Node.js" className="text-green-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiFlask title="Flask" className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiTensorflow title="TensorFlow" className="text-orange-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiPytorch title="PyTorch" className="text-red-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                {/* Keep as text if no suitable icon found or for clarity */}
                <span className="text-lg text-white/80 self-center" title="FastAPI">FastAPI</span>
                <span className="text-lg text-white/80 self-center" title="ROS2">ROS2</span>
                <span className="text-lg text-white/80 self-center" title="OpenCV">OpenCV</span>
              </div>
            </motion.div>

            {/* Tools & Databases */}
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
              <p className="text-lg font-medium mb-3 text-white/80">Tools & Databases</p>
              <div className="flex flex-wrap gap-6 text-4xl">
                <motion.div variants={iconVariants}>
                  <SiGit title="Git" className="text-orange-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiGithub title="GitHub" className="text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiMysql title="MySQL" className="text-blue-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiSqlite title="SQLite" className="text-blue-500 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiVsco title="VS Code" className="text-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants}>
                  <SiReplit title="Replit" className="text-green-400 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                </motion.div>
                {/* Keep as text */}
                <span className="text-lg text-white/80 self-center" title="Microsoft Office Suite">Microsoft Office Suite</span>
              </div>
            </motion.div>

            {/* Soft Skills */}
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
              <p className="text-lg font-medium mb-3 text-white/80">Soft Skills</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-white/80">
                 <span className="bg-white/10 rounded-full px-4 py-1">Communication</span>
                 <span className="bg-white/10 rounded-full px-4 py-1">Collaboration</span>
                 <span className="bg-white/10 rounded-full px-4 py-1">Critical Thinking</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            🚀 Projects
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-white/90 space-y-3">
            <li>
              <span className="font-semibold text-[#9966FF]">HerCare Buddy: A Holistic Women's Wellness Platform</span>
              <p className="text-base text-white/80 mt-1">Spearheaded the development of a comprehensive web-based tool designed to empower women in managing their personal well-being. Integrated specialized resources and educational content to address conditions like PCOS and support mental health, fostering a holistic approach to wellness. Engineered the platform using a modern tech stack including Tailwind CSS, React, HTML, JavaScript, Next.js, and Node.js.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Hand Gesture Recognition using TinyML</span>
              <p className="text-base text-white/80 mt-1">Developed a smart recognition system using TensorFlow Lite and Keras to classify hand gestures on edge devices; optimized for low-latency processing.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">JEE/NEET Solver Bot (AI Chatbot)</span>
              <p className="text-base text-white/80 mt-1">Built an AI-powered bot using OpenRouter API and Replit backend to solve academic queries with live search and NLP integration.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Sales Analytics on Delivery Apps</span>
              <p className="text-base text-white/80 mt-1">Analyzed sales and user behavior using R and 'ggplot'; delivered insights for product repositioning strategies.</p>
            </li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            🏆 Achievements
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-white/90 space-y-2">
            <li>Currently among top 20% teams in the International Quant Championship.</li>
            <li>Solved 300+ DSA problems over LeetCode, GFG, HackerRank, Codeforces.</li>
            <li>LeetCode Rating: 1418.</li>
            <li>2nd Place Enactus SVC Business Plan Competition, Feb 2024.</li>
            <li>CBSE Class 10 District Topper (South West Delhi), 2019.</li>
            <li>Winner Youth Parliament by Ministry of Parliamentary Affairs, 2019.</li>
            <li>NCC A Certificate Holder, 2020.</li>
          </ul>
        </motion.div>

        {/* Relevant Courses */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            📚 Relevant Courses
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-white/90 space-y-2">
            <li>Data Structures and Algorithms (DSA): Arrays, Strings, Linked Lists, Trees, Graphs, Sorting, Recursion, Dynamic Programming.</li>
            <li>Design and Analysis of Algorithms (DAA): Time and Space Complexity, Greedy Algorithms, Divide and Conquer, Backtracking, NP-Completeness.</li>
            <li>Operating Systems: Processes, Scheduling, Memory Management, relevance to Embedded Systems and ROS2.</li>
            <li>Computer Networks: TCP/IP, Protocols, useful for Multi-Agent and ROS2 Communication.</li>
            <li>Database Management Systems (DBMS): SQL, Indexing, Transactions, Logging for Robotics and AI Pipelines.</li>
            <li>Machine Learning: Supervised/Unsupervised Learning, Deep Learning, Model Training, Scikit-learn, TensorFlow, PyTorch.</li>
            <li>Big Data Analytics: Data Wrangling, Statistical Analysis, NumPy, Pandas, Matplotlib, Seaborn.</li>
            <li>Computing Tools Workshop: Python, ROS2, Flask, Git, FastAPI, Simulink, OpenCV, CUDA.</li>
          </ul>
        </motion.div>

        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-cyan-400">
            Leadership & Responsibilities
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-white/90 space-y-3">
            <li>
              <span className="font-semibold text-[#9966FF]">Web Developer, CodeChef NSUT</span>
              <p className="text-base text-white/80 mt-1">Organized and facilitated coding contests and workshops to foster competitive programming skills within the university community. Contributed to the development and maintenance of the club's website, enhancing user experience and functionality. Mentored junior members, providing guidance on DSA and competitive programming strategies. Actively contributed to the growth and visibility of the CodeChef NSUT chapter through various initiatives.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Content Head, Subhasha Literature Society, NSUT</span>
              <p className="text-base text-white/80 mt-1">Led a team of 40+ in curating newsletters, events, and annual publications.</p>
            </li>
            <li>
              <span className="font-semibold text-[#9966FF]">Social Media PR Sub-head, Enactus NSUT</span>
              <p className="text-base text-white/80 mt-1">Scaled engagement by 3x; contributed to NSUT's qualification in Enactus India Nationals League, 2022.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;