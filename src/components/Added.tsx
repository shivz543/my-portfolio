'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
  >
    <h3 className="text-2xl font-semibold mb-4 text-[#9966FF]">{title}</h3>
    {children}
  </motion.div>
);

const Added = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen py-20 px-6 md:px-24 bg-gradient-to-b from-[#0A051E] to-[#100C2F] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#9966FF]"
      >
      </motion.h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {/* Achievements */}
        <Section title=" Achievements">
          <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
            <li>Top 20% teams in the International Quant Championship (Ongoing)</li>
            <li>Solved 300+ DSA problems across LeetCode, GFG, HackerRank, Codeforces</li>
            <li>LeetCode Rating: 1418</li>
            <li>2nd Place – Enactus SVC Business Plan Competition, Feb 2024</li>
            <li>CBSE Class 10 District Topper (South West Delhi), 2019</li>
            <li>Winner – Youth Parliament by Ministry of Parliamentary Affairs, 2019</li>
            <li>NCC A Certificate Holder, 2020</li>
          </ul>
        </Section>

        {/* Relevant Courses */}
        <Section title=" Relevant Courses">
          <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
            <li><b>DSA:</b> Arrays, Strings, Linked Lists, Trees, Graphs, Sorting, DP</li>
            <li><b>DAA:</b> Complexity, Greedy, Divide & Conquer, Backtracking, NP</li>
            <li><b>OS:</b> Processes, Scheduling, Memory, Embedded Systems, ROS2</li>
            <li><b>CN:</b> TCP/IP, Protocols, Multi-Agent Systems, ROS2 Communication</li>
            <li><b>DBMS:</b> SQL, Indexing, Transactions, Logging, Pipelines</li>
            <li><b>ML:</b> Supervised/Unsupervised, DL, Scikit-learn, TensorFlow, PyTorch</li>
            <li><b>Big Data:</b> NumPy, Pandas, Seaborn, Matplotlib, Statistical Analysis</li>
            <li><b>Tools Workshop:</b> Python, Flask, Git, FastAPI, OpenCV</li>
          </ul>
        </Section>

        {/* Positions of Responsibility */}
        <Section title=" Positions of Responsibility">
          <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
            <li><b>Web Developer – CodeChef NSUT:</b> Conducted contests & workshops, mentored juniors, developed the club website</li>
            <li><b>Content Head – Subhasha Literature Society, NSUT:</b> Led team of 40+ for newsletters, events & publications</li>
            <li><b>Social Media PR Sub-head – Enactus NSUT:</b> Scaled engagement 3x and contributed to NSUT’s Nationals qualification</li>
          </ul>
        </Section>
      </div>
    </motion.section>
  );
};

export default Added;
